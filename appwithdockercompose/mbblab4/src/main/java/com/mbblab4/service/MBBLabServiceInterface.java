package com.mbblab4.service;

import java.util.List;

import com.mbblab4.entity.Employee;

public interface MBBLabServiceInterface {

	List<Employee> findAllEmployee();

	Employee createEmployee(Employee e);

}
