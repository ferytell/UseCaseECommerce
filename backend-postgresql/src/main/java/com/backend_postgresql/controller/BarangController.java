package com.backend_postgresql.controller;

import com.backend_postgresql.model.Barang;
import com.backend_postgresql.service.BarangService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api")
public class BarangController {

    @Autowired
    private BarangService barangService;

    @GetMapping("/barang")
    public List<Barang> getAllBarangs() {
        return barangService.getAllBarangs();
    }

    @PostMapping("/barang")
    public Barang addBarang(@RequestBody Barang barang) {
        return barangService.addBarang(barang);
    }
}
