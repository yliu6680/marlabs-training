package com.blog.appconfig;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

import com.blog.repository.*;
import com.blog.service.*;

import org.springframework.context.annotation.Bean;

@Configuration
@ComponentScan({"com.blog"})
public class AppConfig {
	
	@Bean(name = "blogRepository")
	public BlogRepository getBlogRepository() {
		return new HibernateBlogRepositoryImpl();
	}
	
	@Bean(name = "blogService")
	public BlogService getBlogService() {
		BlogServiceImpl blogService = new BlogServiceImpl();
		
		return blogService;
	}
}
