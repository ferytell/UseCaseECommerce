package com.backend_postgresql.service;

import com.backend_postgresql.model.Barang;
import com.backend_postgresql.repository.BarangRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BarangService {

    @Autowired
    private BarangRepository barangRepository;

    public List<Barang> getAllBarangs() {
        return barangRepository.findAll();
    }

    public Barang addBarang(Barang barang) {
        return barangRepository.save(barang);
    }

}
