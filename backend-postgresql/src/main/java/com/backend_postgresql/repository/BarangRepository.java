package com.backend_postgresql.repository;
import com.backend_postgresql.model.Barang;

import java.util.Optional;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BarangRepository extends JpaRepository<Barang, String> {
    Optional<Barang> findById(String id);

    List<Barang> findAllByOrderByRfidAsc();

}
