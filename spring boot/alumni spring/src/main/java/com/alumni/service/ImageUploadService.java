package com.alumni.service;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.alumni.dto.Image;
import com.alumni.repository.ImageRepository;

import java.io.File;
import java.nio.file.Files;
import java.nio.file.Paths;

import org.aspectj.apache.bcel.util.ClassPath;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.system.ApplicationHome;

@Service
public class ImageUploadService {
	
	@Autowired
	private ImageRepository imageRepository;
	
	public boolean uploadImage(MultipartFile file) {
		try {		
		ApplicationHome appHome=new ApplicationHome();
		System.out.println("Working class "+appHome.getDir());
		//String fileUrl=Paths.get(getClass().getResource("/static").toURI()).toFile().getParent().toString();
		//String fileUrl="/home/ralph/Documents/workspace-spring-tool-suite-4-4.17.0.RELEASE/imageApp/src/main/resources/static";
		//String baseUrl=getClass().getResource("/static").getPath()+File.separator;
		
		//String baseUrl=getClass().getResource(File.separator+"static").getPath()+File.separator;
		//System.out.println("Base url w/o file name"+fileUrl);

		String parentFolder=appHome.getDir()+File.separator+"images"+File.separator;
		System.out.println("Saving to "+parentFolder);

		Files.createDirectories(Paths.get(parentFolder));
		String fileUrl=parentFolder+file.getOriginalFilename();
		File fileTest=new File(fileUrl);
		if(fileTest.exists()) {
			System.out.println("File already exists,attempting to remove");
			if(!fileTest.delete()) {
				System.out.println("File already exists but unable to delete");
				return false;
			}
			System.out.println("File removed");
			
		}
		Image img=new Image(file.getOriginalFilename() , file.getContentType() ,fileUrl);
				
		file.transferTo(new File(fileUrl));
		System.out.println("Saved "+file.getOriginalFilename()+" to "+fileUrl);

		imageRepository.save(img);
		System.out.println("Saved "+file.getOriginalFilename()+" details to database");

		return true;
		
		}catch(Exception e) {
			System.out.println("Error with image "+e); 
			return false;
		}
		//return false;
	}
}
