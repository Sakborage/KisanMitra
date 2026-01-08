package com.example.kisanmitra;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing
public class KisanmitraApplication {

	public static void main(String[] args) {

		SpringApplication.run(KisanmitraApplication.class, args);
	}

}
