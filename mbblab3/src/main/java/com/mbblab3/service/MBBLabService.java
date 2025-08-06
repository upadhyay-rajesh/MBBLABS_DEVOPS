package com.mbblab3.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mbblab3.dao.MBBLabDAOInterface;
import com.mbblab3.entity.Employee;

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

}
