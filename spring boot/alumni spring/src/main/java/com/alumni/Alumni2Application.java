package com.alumni;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class Alumni2Application {

	public static void main(String[] args) {
		SpringApplication.run(Alumni2Application.class, args);
	}
	
	@RequestMapping("/")
	public String greet() {
		return "<h1>Hello world!</h1>";
	}
}
