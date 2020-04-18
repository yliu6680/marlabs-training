package com.blog.main;

import java.util.List;
import java.util.Map;

import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

import com.blog.appconfig.*;
import com.blog.service.BlogService;

public class App {

	public static void main(String[] args) {
		ApplicationContext appContext = new AnnotationConfigApplicationContext(AppConfig.class);
		BlogService blogService = appContext.getBean("blogService", BlogService.class);
		
		List<String> titles = blogService.getAllTitles();
		Map<String, String> summaries = blogService.getAllSummary();
		
		System.out.println(titles);
		
		System.out.println(summaries);
	}

}
