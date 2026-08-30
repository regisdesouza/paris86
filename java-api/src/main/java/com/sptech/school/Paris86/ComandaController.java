package com.sptech.school.Delivery;

import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.web.bind.annotation.*;


import java.sql.PreparedStatement;
import java.sql.Statement;
import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/restaurante/comanda")
public class ComandaController {

    private final JdbcTemplate template;

    public ComandaController(JdbcTemplate template) {
        this.template = template;
    }

    @GetMapping
    public ResponseEntity<List<Comanda>> listar() {

        String sql = "SELECT * FROM comanda";

        List<Comanda> resultado = template.query(sql, new BeanPropertyRowMapper<>(Comanda.class));

        return ResponseEntity.status(200).body(resultado);
    }

    private boolean comandaValida(Comanda comanda) {
        boolean temNome = comanda.getNomePrato() != null && !comanda.getNomePrato().isBlank();
        boolean temTodosIngredientes = comanda.getCarboidratoId() != null
                && comanda.getProteinaId() != null
                && comanda.getVegetalId() != null
                && comanda.getGorduraId() != null
                && comanda.getTemperoId() != null;

        return temNome && temTodosIngredientes;
    }

    @PostMapping()
    public ResponseEntity<Comanda> cadastrar(@RequestBody Comanda comanda) {

        if (!comandaValida(comanda)) {
            return ResponseEntity.status(400).build();
        }

        String sql = "INSERT INTO comanda (nome_prato, carboidrato_id, proteina_id, vegetal_id, gordura_id, tempero_id, total) VALUES (?, ?, ?, ?, ?, ?, ?);";

        KeyHolder holder = new GeneratedKeyHolder();

        template.update(con -> {
            PreparedStatement statement = con.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS);

            statement.setString(1, comanda.getNomePrato());
            statement.setInt(2, comanda.getCarboidratoId());
            statement.setInt(3, comanda.getProteinaId());
            statement.setInt(4, comanda.getVegetalId());
            statement.setInt(5, comanda.getGorduraId());
            statement.setInt(6, comanda.getTemperoId());
            statement.setDouble(7, comanda.getTotal());

            return statement;
        }, holder);

        Integer idGerado = holder.getKeyAs(Integer.class);
        comanda.setId(idGerado);

        return ResponseEntity.status(201).body(comanda);
    }


    @PutMapping("/{id}")
    public ResponseEntity<Comanda> atualizarStatus(@PathVariable Integer id, @RequestBody Comanda comandaParaAtualizar) {

        if (!existePorId(id)) {
            return ResponseEntity.status(404).build();
        }

        if (statusInvalido(comandaParaAtualizar.getStatus())) {
            return ResponseEntity.status(400).build();
        }

        String sql = "UPDATE comanda SET status = ? WHERE id = ?";

        template.update(sql,
                comandaParaAtualizar.getStatus(),
                id
        );

        comandaParaAtualizar.setId(id);

        return ResponseEntity.status(200).body(comandaParaAtualizar);
    }

    private boolean existePorId(Integer id) {
        String sql = "SELECT COUNT(*) FROM comanda WHERE id = ?";
        Integer quantidade = template.queryForObject(sql, Integer.class, id);
        return quantidade != null && quantidade > 0;
    }

    private boolean statusInvalido(String status) {
        if (status == null || status.isBlank()) {
            return true;
        }
        return !status.equals("EM PREPARO") && !status.equals("ENTREGUE");
    }
}