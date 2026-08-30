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
@RequestMapping("/restaurante/cardapio")
public class CardapioController {

    private final JdbcTemplate template;

    public CardapioController(JdbcTemplate template){
        this.template = template;
    }

    @GetMapping
    public ResponseEntity<List<Cardapio>> listar(){

        String sql = "SELECT * FROM cardapio";

        List<Cardapio> resultado = template.query(sql, new BeanPropertyRowMapper<>(Cardapio.class));

        return ResponseEntity.status(200).body(resultado);

    }



}
