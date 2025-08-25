package com.mbblab4.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mbblab4.entity.Employee;

@Repository
public interface MBBLabDAOInterface extends JpaRepository<Employee, String>{

}
