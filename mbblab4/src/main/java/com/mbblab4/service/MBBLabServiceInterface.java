package com.mbblab4.service;

import java.util.List;

import com.mbblab4.entity.Employee;

public interface MBBLabServiceInterface {

	List<Employee> findAllEmployee();

	Employee createEmployee(Employee e);

	Employee findEmployeeById(String email);

	String deleteEmployeeById(String email);

	Employee editEmployeeById(String email, Employee emp);

}
