package com.demo.assignment2;

public class Main {

	public int[] solution(int[] A, int N, int K) {
		if (A == null || N == 0) return A;
		
		for(int i = 0; i < K; i++) {
			int temp = A[N - 1];
			for (int j = N - 2; j >= 0; j--) {
				A[j + 1] = A[j];
			}
			A[0] = temp;
		}
		
		return A;
	}
	
	private void printArray(int[] ans) {
		System.out.println("The answer is");
		System.out.print("[ ");
		
		for (int i: ans) {
			System.out.print(i + " ");
		}
		
		System.out.println("]");
	}
	
	public static void main(String[] args) {
		Main obj = new Main();
		int[] A1 = {3,8,9,7,6};
		int K1 = 3;
		int[] ans1 = obj.solution(A1, A1.length, K1);
		obj.printArray(ans1);
		
		int[] A2 = {1,2,3};
		int K2 = 5;
		int[] ans2 = obj.solution(A2, A2.length, K2);
		obj.printArray(ans2);
	}

}
