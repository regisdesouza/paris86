package com.sptech.school.Delivery;

public class Comanda {
    private Integer id;
    private String nomePrato;
    private Integer carboidratoId;
    private Integer proteinaId;
    private Integer vegetalId;
    private Integer gorduraId;
    private Integer temperoId;
    private Double total;
    private String status;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getNomePrato() {
        return nomePrato;
    }

    public void setNomePrato(String nomePrato) {
        this.nomePrato = nomePrato;
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

    public Double getTotal() {
        return total;
    }

    public void setTotal(Double total) {
        this.total = total;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}
