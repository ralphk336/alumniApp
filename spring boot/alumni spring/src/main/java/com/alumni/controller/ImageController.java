package com.alumni.controller;

import java.io.File;
import java.io.FileInputStream;
import java.io.InputStream;
import java.io.Reader;

import org.apache.commons.io.IOUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.alumni.dto.Image;
import com.alumni.repository.ImageRepository;
import com.alumni.service.ImageUploadService;

import jakarta.annotation.Resource;

@RestController
@RequestMapping("/api/image")
@CrossOrigin(origins="http://localhost:4200")
public class ImageController {
	@Autowired
	ImageUploadService imageUploadService;
	@Autowired
	ImageRepository imageRepository;
	
	@GetMapping("")
	public ResponseEntity<byte[]> getImage(){
		Image img=imageRepository.findTopByOrderByIdDesc();
		try {
		//System.out.println("\""+img.getPath()+"\""); 
		File imgFile=new File(img.getPath());
		InputStream imgInputStream=new FileInputStream(imgFile);
		byte [] imageArray=IOUtils.toByteArray(imgInputStream);
		return new ResponseEntity<byte[]>(imageArray,HttpStatus.OK);
		}catch(Exception e) {
			System.out.println("Error returning image " + e);
			return new ResponseEntity<byte[]>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
		/*
		ClassPathResource image=new ClassPathResource("static/lelouch.jpg");
		System.out.println(image.exists());
		try {
			System.out.println(image.getInputStream().readAllBytes());
			System.out.println(getClass().getResource("/static/lelouch.jpg").toURI());
		}catch(Exception e) {
			System.out.println("Error with image"+e);
		}
		return new ResponseEntity<String>("Hello image",HttpStatus.OK);
		
	}
	*/
	
	@GetMapping("/all")
	public ResponseEntity<Iterable<Image>> getAllImages(){
		//Iterable 
		return new ResponseEntity<Iterable<Image>>(imageRepository.findAll(),HttpStatus.OK);
	}
	@PostMapping("")
	public ResponseEntity<HttpStatus> uploadImage(@RequestParam("file") MultipartFile file){
		if(imageUploadService.uploadImage(file)) {
			return new ResponseEntity<HttpStatus>(HttpStatus.OK);
		}
		return new ResponseEntity<HttpStatus>(HttpStatus.INTERNAL_SERVER_ERROR);
	}
}
