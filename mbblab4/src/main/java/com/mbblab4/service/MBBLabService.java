package com.mbblab4.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mbblab4.dao.MBBLabDAOInterface;
import com.mbblab4.entity.Employee;

import jakarta.transaction.Transactional;


@Service
@Transactional
public class MBBLabService implements MBBLabServiceInterface{
	
	@Autowired
	private MBBLabDAOInterface mDao;

	@Override
	public List<Employee> findAllEmployee() {
		// TODO Auto-generated method stub
		return mDao.findAll();
	}

	@Override
	public Employee createEmployee(Employee e) {
		mDao.save(e);
		return e;
	}

	@Override
	public Employee findEmployeeById(String email) {
		Optional<Employee> ee = mDao.findById(email);
		return ee.get();
	}

	@Override
	public String deleteEmployeeById(String email) {
		mDao.deleteById(email);
		return "Record Deleted";
	}

	@Override
	public Employee editEmployeeById(String email, Employee emp) {
		emp.setEmail(email);
		mDao.saveAndFlush(emp);
		return emp;
	}

}
