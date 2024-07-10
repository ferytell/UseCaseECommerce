package com.backend_postgresql.service;

import com.backend_postgresql.exception.ResourceNotFoundException;
import com.backend_postgresql.model.Barang;
import com.backend_postgresql.model.Customer;
import com.backend_postgresql.model.Transaksi;
import com.backend_postgresql.repository.BarangRepository;
import com.backend_postgresql.repository.CustomerRepository;
import com.backend_postgresql.repository.TransaksiRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class TransaksiService {

    @Autowired
    private CustomerRepository customerRepository;

    @Autowired
    private BarangRepository barangRepository;

    @Autowired
    private TransaksiRepository transaksiRepository;

    public List<Transaksi> getAllTransaksis() {
        return transaksiRepository.findAll();
    }

    @Transactional
    public Transaksi createTransaction(String qrCode, String rfid, int jumlah) {
        // Find the customer and the item
        Customer customer = customerRepository.findById(qrCode).orElseThrow(() -> new RuntimeException("Customer not found"));
        Barang barang = barangRepository.findById(rfid).orElseThrow(() -> new RuntimeException("Item not found"));

        // Calculate the total price
        double totalPrice = barang.getHargaSatuan() * jumlah;

        // Check if the customer has enough balance
        if (customer.getWallet() < totalPrice) {
            throw new RuntimeException("Insufficient balance");
        }

        // Deduct the amount from the customer's wallet
        customer.setWallet(customer.getWallet() - totalPrice);
        customerRepository.save(customer);

        // Create and save the transaction
        Transaksi transaksi = new Transaksi();
        transaksi.setQrCode(qrCode);
        transaksi.setRfid(rfid);
        transaksi.setHargaSatuan(barang.getHargaSatuan());
        transaksi.setJumlah(jumlah);
        transaksi.setTanggalJam(LocalDateTime.now());

        return transaksiRepository.save(transaksi);
    }
}
