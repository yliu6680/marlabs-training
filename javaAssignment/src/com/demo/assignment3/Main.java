package com.demo.assignment3;

import java.util.HashSet;

//Permutation question
public class Main {
	public int solution (int[] A, int N) {
		if (A == null || N == 0) {
			return 0;
		}
		
		HashSet<Integer> set = new HashSet<Integer>();
		
		for (int i : A) {
			if (i < 1 || i > N) {
				return 0;
			}
			set.add(i);
		}
		
		if (set.size() == N) {
			return 1;
		} 
		
		return 0;
		
	}
	
	public static void main(String[] args) {
		Main p = new Main();
		int[] A1 = {1, 2, 3, 4, 5};
		int[] A2 = {1, 2, 2, 2, 3};
		
		System.out.println(p.solution(A1, A1.length));
		System.out.println(p.solution(A2, A2.length));

	}
}
