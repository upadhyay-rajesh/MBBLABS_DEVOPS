package com.mbblab3.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mbblab3.entity.Employee;

@Repository
public interface MBBLabDAOInterface extends JpaRepository<Employee, String>{

}
