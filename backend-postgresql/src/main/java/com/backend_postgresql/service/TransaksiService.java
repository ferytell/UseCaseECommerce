package com.backend_postgresql.service;

import com.backend_postgresql.model.Transaksi;
import com.backend_postgresql.repository.TransaksiRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TransaksiService {

    @Autowired
    private TransaksiRepository transaksiRepository;

    public List<Transaksi> getAllTransaksis() {
        return transaksiRepository.findAll();
    }

    public Transaksi addTransaksi(Transaksi transaksi) {
        return transaksiRepository.save(transaksi);
    }

}
