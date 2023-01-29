package com.alumni.configuration;

import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.NoOpPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.servlet.config.annotation.CorsRegistration;

import com.alumni.service.UsersService;

@Configuration
@EnableWebSecurity
public class SecurityConfiguration {
	private UsersService usersService;
	
	/*
	 * Service to handle authentication 
	 */
	@Autowired
	public void setUsersService(UsersService usersService) {
		this.usersService=usersService;
	}
	
	@Bean
    PasswordEncoder passwordEncoder(){
		return new BCryptPasswordEncoder();
		//return NoOpPasswordEncoder.getInstance();
    }
	
	@Bean
	SecurityFilterChain securityFilterChain(HttpSecurity httpSecurity) throws Exception{
		httpSecurity.cors();
		httpSecurity.csrf().disable();
		
		
		httpSecurity.authorizeHttpRequests()
        	.requestMatchers("/api/alumnus").permitAll()
        	.requestMatchers("/api/user").permitAll()
        	.anyRequest().authenticated();
        	
        	httpSecurity.headers().frameOptions().disable();
        

        	//httpSecurity.authorizeHttpRequests().anyRequest().authenticated();
		httpSecurity.httpBasic();
		//httpSecurity.formLogin();
		return httpSecurity.build();
	}
	/*
	@Bean
	InMemoryUserDetailsManager inMemoryDetailsManager() {
		return new InMemoryUserDetailsManager(User.withUsername("bob").password("{noop}bob").roles("admin").build());
	}
	*/
	
	@Bean
	CorsConfigurationSource corsConfigurationSource() {
	    final CorsConfiguration config = new CorsConfiguration();

	    config.setAllowedOrigins(Arrays.asList("http://localhost:4200"));
	    config.setAllowedMethods(Arrays.asList("GET", "POST", "OPTIONS", "DELETE", "PUT", "PATCH"));
	    config.setAllowCredentials(true);
	    config.setAllowedHeaders(Arrays.asList("Authorization", "Cache-Control", "Content-Type"));

	    final UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
	    source.registerCorsConfiguration("/**", config);

	    return source;
	}
	
	
}
