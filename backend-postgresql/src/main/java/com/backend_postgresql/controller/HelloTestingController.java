package com.backend_postgresql.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class HelloTestingController {

    @GetMapping("/hello")
    public String hello() {
        return "Hello, Spring Boot with PostgreSQL!";
    }
}
