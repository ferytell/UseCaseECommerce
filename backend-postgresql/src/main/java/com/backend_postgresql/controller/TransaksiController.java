package com.backend_postgresql.controller;

import com.backend_postgresql.dto.TransaksiRequest;
import com.backend_postgresql.model.Transaksi;
import com.backend_postgresql.service.TransaksiService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api")
public class TransaksiController {

    @Autowired 
    private TransaksiService transaksiService;

    @GetMapping("/transaksi")
    public List<Transaksi> getAllTransaksis() {
        return transaksiService.getAllTransaksis();
    }

    // @PostMapping("/transaksi")
    // public Transaksi createTransaction(@RequestParam String qrCode, @RequestParam String rfid, @RequestParam int jumlah) {
    //     return transaksiService.createTransaction(qrCode, rfid, jumlah);
    // }

    @PostMapping("/transaksi")
    public Transaksi createTransaction(@RequestBody TransaksiRequest transaksiRequest) {
        return transaksiService.createTransaction(
            transaksiRequest.getQrCode(),
            transaksiRequest.getRfid(),
            transaksiRequest.getJumlah()
        );
    }

    @GetMapping("/transaksi/byQrCode")
    public List<Transaksi> getTransaksisByQrCode(@RequestParam String qrCode) {
        return transaksiService.getTransaksisByQrCode(qrCode);
    }
}
