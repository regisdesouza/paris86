package com.sptech.school.Paris86;

public class Cardapio {

    private Integer id;
    private String emote;
    private String prato;
    private String descricao;
    private Double preco;
    private Integer carboidratoId;
    private Integer proteinaId;
    private Integer vegetalId;
    private Integer gorduraId;
    private Integer temperoId;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getEmote() {
        return emote;
    }

    public void setEmote(String emote) {
        this.emote = emote;
    }

    public String getPrato() {
        return prato;
    }

    public void setPrato(String prato) {
        this.prato = prato;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public Double getPreco() {
        return preco;
    }

    public void setPreco(Double preco) {
        this.preco = preco;
    }

    public Integer getCarboidratoId() {
        return carboidratoId;
    }

    public void setCarboidratoId(Integer carboidratoId) {
        this.carboidratoId = carboidratoId;
    }

    public Integer getProteinaId() {
        return proteinaId;
    }

    public void setProteinaId(Integer proteinaId) {
        this.proteinaId = proteinaId;
    }

    public Integer getVegetalId() {
        return vegetalId;
    }

    public void setVegetalId(Integer vegetalId) {
        this.vegetalId = vegetalId;
    }

    public Integer getGorduraId() {
        return gorduraId;
    }

    public void setGorduraId(Integer gorduraId) {
        this.gorduraId = gorduraId;
    }

    public Integer getTemperoId() {
        return temperoId;
    }

    public void setTemperoId(Integer temperoId) {
        this.temperoId = temperoId;
    }
}