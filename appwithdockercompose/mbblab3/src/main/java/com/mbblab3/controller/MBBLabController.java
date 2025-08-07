package com.mbblab3.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mbblab3.entity.Employee;
import com.mbblab3.service.MBBLabServiceInterface;

@RestController
public class MBBLabController {
	
	@Autowired
	private MBBLabServiceInterface mService;
	
	@GetMapping("displayAllEmployee")
	public List<Employee> getAll(){
		
		
		
		List<Employee> list =mService.findAllEmployee();
			
			
		return list;
		
	}

}
