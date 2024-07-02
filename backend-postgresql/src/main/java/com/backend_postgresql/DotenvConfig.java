package com.backend_postgresql;

import io.github.cdimascio.dotenv.Dotenv;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class DotenvConfig {
    @Bean
    public Dotenv dotenv() {
        // Load .env file from the root directory
        return Dotenv.configure()
                     .directory(".") // Ensure it points to the directory containing the .env file
                     .load();
    }
}
