package com.backend_postgresql.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloTestingController {

    @GetMapping("/hello")
    public String hello() {
        return "Hello, Spring Boot with PostgreSQL!";
    }
}
