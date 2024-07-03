package com.backend_postgresql.controller;

import com.backend_postgresql.model.Transaksi;
import com.backend_postgresql.service.TransaksiService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
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

    @PostMapping("/transaksi")
    public Transaksi addTransaksi(@RequestBody Transaksi transaksi) {
        return transaksiService.addTransaksi(transaksi);
    }
}
