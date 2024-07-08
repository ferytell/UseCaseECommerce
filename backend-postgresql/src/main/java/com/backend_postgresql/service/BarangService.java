package com.backend_postgresql.service;

import com.backend_postgresql.exception.ResourceNotFoundException;
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
        return barangRepository.findAllByOrderByRfidAsc();
    }

    public Barang addBarang(Barang barang) {
        return barangRepository.save(barang);
    }

    public Barang getBarangById(String id) {
        return barangRepository.findById(id)
        .orElseThrow(() -> new ResourceNotFoundException("Barang not found with id " + id));
    }



    public Barang updateBarang(String id, Barang barangDetails) {
        Barang barang = getBarangById(id);
        barang.setNamaBarang(barangDetails.getNamaBarang());
        barang.setHargaSatuan(barangDetails.getHargaSatuan());
        // Set other fields as needed
        return barangRepository.save(barang);

    }

    public void deleteBarang(String id) {
        Barang barang = getBarangById(id);
        barangRepository.delete(barang);
    }

    


}
