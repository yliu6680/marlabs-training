package com.demo.assignment1;

import java.util.LinkedList;
import java.util.Queue;

public class Main {

	public static void main(String[] args) throws InterruptedException {

		final Worker pc = new Worker();

		// Create producer thread
		Thread t1 = new Thread(new Runnable() {
			@Override
			public void run() {
				try {
					pc.produce();
				} catch (InterruptedException e) {
					e.printStackTrace();
				}
			}
		});

		// Create consumer thread
		Thread t2 = new Thread(new Runnable() {
			@Override
			public void run() {
				try {
					pc.consume();
				} catch (InterruptedException e) {
					e.printStackTrace();
				}
			}
		});

		t1.start();
		t2.start();

		t1.join();
		t2.join();
		
	}

	public static class Worker {

		Queue<Order> queue = new LinkedList<Order>();
		int capacity = 5;

		// Function called by producer thread
		public void produce() throws InterruptedException {
			int orderid = 1;
			while (orderid <= 100) {
				synchronized (this) {
					// if the queue is full, the producer thread will wait 
					while (queue.size() == capacity) {
						System.out.println("Waiting for order process");
						wait();
					}

					// to insert the orders in the queue
					queue.offer(new Order(orderid++, "NEW"));

					// tell the consumer to process the orders
					notify();

					// make the work could be monitered step by step
					Thread.sleep(300);
				}
			}
		}

		// Function called by consumer thread
		public void consume() throws InterruptedException {
			while (true) {
				synchronized (this) {
					// when the queue is empty, then the tread will wait
					while (queue.size() == 0)
						wait();

					Order order = queue.poll();
					order.state = "FULFILLED";
					System.out.println("Order " + order.id + " has been processed");

					// tell producer thread 
					notify();

					Thread.sleep(1000);
				}
			}
		}
	}
}

class Order {
	int id;
	String state;

	public Order(int id, String state) {
		this.id = id;
		this.state = state;
		System.out.println("Order " + id + " has been created");
	}

}