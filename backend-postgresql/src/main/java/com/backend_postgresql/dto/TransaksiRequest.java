package com.backend_postgresql.dto;

import lombok.Data;

@Data
public class TransaksiRequest {
    private String qrCode;
    private String rfid;
    private int jumlah;
}