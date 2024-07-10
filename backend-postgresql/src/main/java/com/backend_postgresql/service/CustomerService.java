package com.backend_postgresql.service;

import com.backend_postgresql.exception.ResourceNotFoundException;
import com.backend_postgresql.model.Barang;
import com.backend_postgresql.model.Customer;
import com.backend_postgresql.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CustomerService {

    @Autowired
    private CustomerRepository customerRepository;

    public List<Customer> getAllCustomers() {
        // return customerRepository.findAll();
        return customerRepository.findAllByOrderByNamaAsc();
    }

    public Customer addCustomer(Customer customer) {
        return customerRepository.save(customer);
    }

    public Customer getCustomerById(String id) {
        return customerRepository.findById(id)
        .orElseThrow(() -> new ResourceNotFoundException("Customer not found with id " + id));
    }

    public Customer updateCustomer(String id, Customer customerDetails) {
        Customer customer = getCustomerById(id);
        customer.setNama(customerDetails.getNama());
        customer.setWallet(customerDetails.getWallet());
        // Set other fields as needed
        return customerRepository.save(customer);
    }

    public void deleteCustomer(String id) {
        Customer customer = getCustomerById(id);
        customerRepository.delete(customer);
    }



}
