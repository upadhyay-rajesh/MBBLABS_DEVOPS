package com.mbblab4.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.mbblab4.entity.Employee;
import com.mbblab4.service.MBBLabServiceInterface;

@RestController
public class MBBLabControllerMorning {
	
	@Autowired
	private MBBLabServiceInterface mService;
	
	@PostMapping("createEmployee")
	public Employee getAll(@RequestBody Employee e){
		
		
		
		Employee list =mService.createEmployee(e);
			
			
		return e;
		
	}

}
