package com.blog.repository;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

import com.blog.model.Blog;

@Repository("blogRepository")
public class HibernateBlogRepositoryImpl implements BlogRepository {

	private List<Blog> test() {
		Blog b1 = new Blog();
		b1.setId(0);
		b1.setTitle("First Blog");
		b1.setSummary("This is the first test blog of the service");
		b1.setContent("Hello Bloggify!");
		
		Blog b2 = new Blog();
		b2.setId(1);
		b2.setTitle("Second Blog");
		b2.setSummary("This is the second test blog of the service");
		b2.setContent("Today is Saturday");
		
		Blog b3 = new Blog();
		b3.setId(2);
		b3.setTitle("Third Blog");
		b3.setSummary("This is the third test blog of the service");
		b3.setContent("Hello Spring!");
		
		List<Blog> res = new ArrayList<Blog>();
		res.add(b1);
		res.add(b2);
		res.add(b3);
		
		return res;
	}

	@Override
	public List<String> getAllTitles() {
		List<Blog> res = test();
		
		List<String> titles = new ArrayList<String>();
		
		for(Blog b: res) {
			titles.add(b.getTitle());
		}
		
		return titles;
	}

	@Override
	public Map<String, String> getAllSummary() {
		List<Blog> res = test();
		
		Map<String, String> summaries = new HashMap<String, String>();
		
		for(Blog b: res) {
			summaries.put(b.getTitle(), b.getSummary());
		}
		
		return summaries;
	}

}
