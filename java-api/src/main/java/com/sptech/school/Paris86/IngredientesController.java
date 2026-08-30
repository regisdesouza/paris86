package com.sptech.school.Delivery;


import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/restaurante/ingredientes")
public class IngredientesController {

    private final JdbcTemplate template;

    public IngredientesController(JdbcTemplate template){
        this.template = template;
    }

    @GetMapping
    public ResponseEntity<List<Ingredientes>> listar(){

        String sql = "SELECT * FROM ingredientes";

        List<Ingredientes> resultado = template.query(sql, new BeanPropertyRowMapper<>(Ingredientes.class));

        return ResponseEntity.status(200).body(resultado);

    }



}
