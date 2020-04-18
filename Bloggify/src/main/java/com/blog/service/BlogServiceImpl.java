package com.blog.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.blog.repository.BlogRepository;

@Service("blogService")
public class BlogServiceImpl implements BlogService {
	private BlogRepository blogRepository;
	
	public BlogServiceImpl() {
		System.out.println("inside default constructor");
	}
	
	
	public BlogServiceImpl(BlogRepository blogRepository) {
		System.out.println("inside override constructor");
		this.blogRepository = blogRepository;
	}
	
	public BlogRepository getBlogRepository() {
		return blogRepository;
	}
	
	@Autowired
	public void setBlogRepository(BlogRepository blogRepository) {
		System.out.println("inside setter method");
		this.blogRepository = blogRepository;
	}

	@Override
	public List<String> getAllTitles() {
		
		return blogRepository.getAllTitles();
	}

	@Override
	public Map<String, String> getAllSummary() {
		
		return blogRepository.getAllSummary();
	}
	
}
