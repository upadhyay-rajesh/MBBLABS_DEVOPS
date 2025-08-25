package com.mbblab4.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mbblab4.entity.Employee;
import com.mbblab4.service.MBBLabServiceInterface;

@RestController
@RequestMapping("api/v1/employees")
@CrossOrigin("*")
public class MBBLabControllerMorning {
	
	@Autowired
	private MBBLabServiceInterface mService;
	
	@PostMapping
	public Employee getAll(@RequestBody Employee e){
		
		
		
		Employee list =mService.createEmployee(e);
			
			
		return e;
		
	}
	
	@GetMapping
	public List<Employee> getAll(){
		return mService.findAllEmployee();
	}
	
	@GetMapping("/{id}")
	public Employee getById(@PathVariable("id") String email) {
		return mService.findEmployeeById(email);
	}
	
	@DeleteMapping("/{id}")
	public String deleteById(@PathVariable("id") String email) {
		return mService.deleteEmployeeById(email);
	}
	
	@PutMapping("/{id}")
	public Employee editById(@PathVariable("id") String email, @RequestBody Employee emp) {
		return mService.editEmployeeById(email,emp);
	}

}


















