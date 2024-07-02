package com.backend_postgresql.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

import java.time.LocalDateTime;

@Entity
public class Transaksi {

    @Id
    private String qrCode; // Assuming QRCode is a unique identifier

    private String rfid;
    private double hargaSatuan;
    private int jumlah;
    private LocalDateTime tanggalJam;

    // Getters and Setters
    public String getQrCode() {
        return qrCode;
    }

    public void setQrCode(String qrCode) {
        this.qrCode = qrCode;
    }

    public String getRfid() {
        return rfid;
    }

    public void setRfid(String rfid) {
        this.rfid = rfid;
    }

    public double getHargaSatuan() {
        return hargaSatuan;
    }

    public void setHargaSatuan(double hargaSatuan) {
        this.hargaSatuan = hargaSatuan;
    }

    public int getJumlah() {
        return jumlah;
    }

    public void setJumlah(int jumlah) {
        this.jumlah = jumlah;
    }

    public LocalDateTime getTanggalJam() {
        return tanggalJam;
    }

    public void setTanggalJam(LocalDateTime tanggalJam) {
        this.tanggalJam = tanggalJam;
    }
}
