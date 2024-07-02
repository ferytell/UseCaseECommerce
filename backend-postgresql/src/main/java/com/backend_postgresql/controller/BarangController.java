package com.backend_postgresql.controller;

import com.backend_postgresql.model.Barang;
import com.backend_postgresql.service.BarangService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/barangs")
public class BarangController {

    @Autowired
    private BarangService barangService;

    @GetMapping
    public List<Barang> getAllBarangs() {
        return barangService.getAllBarangs();
    }
}
