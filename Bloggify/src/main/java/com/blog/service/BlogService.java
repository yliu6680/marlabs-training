package com.blog.service;

import java.util.List;
import java.util.Map;

public interface BlogService {
	public List<String> getAllTitles();
	
	public Map<String, String> getAllSummary();
}
