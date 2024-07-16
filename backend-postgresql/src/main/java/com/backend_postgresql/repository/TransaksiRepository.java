package com.backend_postgresql.repository;

import com.backend_postgresql.model.Transaksi;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface TransaksiRepository extends JpaRepository<Transaksi, String> {
    List<Transaksi> findByQrCode(String qrCode);

}
