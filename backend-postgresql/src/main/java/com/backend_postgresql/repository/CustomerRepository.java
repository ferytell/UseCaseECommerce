package com.backend_postgresql.repository;
import com.backend_postgresql.model.Customer;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CustomerRepository extends JpaRepository<Customer, String> {

    Optional<Customer> findById(String id);

    List<Customer> findAllByOrderByNamaAsc();
}
