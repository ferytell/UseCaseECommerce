package com.backend_postgresql.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Barang {

    @Id
    private String rfid; // Assuming RFID is a unique identifier

    private String namaBarang;
    private double hargaSatuan;

    // Getters and Setters
    public String getRfid() {
        return rfid;
    }

    public void setRfid(String rfid) {
        this.rfid = rfid;
    }

    public String getNamaBarang() {
        return namaBarang;
    }

    public void setNamaBarang(String namaBarang) {
        this.namaBarang = namaBarang;
    }

    public double getHargaSatuan() {
        return hargaSatuan;
    }

    public void setHargaSatuan(double hargaSatuan) {
        this.hargaSatuan = hargaSatuan;
    }
}
