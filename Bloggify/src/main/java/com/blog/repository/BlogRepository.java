package com.blog.repository;

import java.util.List;
import java.util.Map;

import com.blog.model.Blog;

public interface BlogRepository {
	
	public List<String> getAllTitles();
	
	public Map<String, String> getAllSummary();
}
