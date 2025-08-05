package com.mbblab3.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mbblab3.entity.Employee;

@RestController
public class MBBLabController {
	
	@GetMapping("displayAllEmployee")
	public List<Employee> getAll(){
		
		List<Employee> list =new ArrayList<Employee>();
			Employee e1=new Employee();
			e1.setName("Rajesh");
			e1.setPassword("abcd");
			e1.setEmail("abc@gmail.com");
			e1.setAddress("Bangalore");
			
			Employee e2=new Employee();
			e2.setName("Rajesh1");
			e2.setPassword("abcd1");
			e2.setEmail("abc1@gmail.com");
			e2.setAddress("Bangalore1");
			
			list.add(e1);
			list.add(e2);
			
		return list;
		
	}

}
