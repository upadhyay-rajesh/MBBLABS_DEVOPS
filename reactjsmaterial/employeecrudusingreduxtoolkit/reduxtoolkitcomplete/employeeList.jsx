// src/components/EmployeeList.js
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setEmployees, deleteEmployee } from "./employeeslice";
import api from "./services";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function EmployeeList() {
  const { list } = useSelector((state) => state.employees);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    api.get("").then((res) => {
      dispatch(setEmployees(res.data));
    });
  }, [dispatch]);

  const handleDelete = (id) => {
    api.delete(`/${id}`).then(() => {
      dispatch(deleteEmployee(id));
      alert("Employee deleted successfully");
      navigate("/");
    });
  };

  return (
    <div>
      <h2>Employees</h2>
      <table border={1} cellPadding={5} cellSpacing={0}>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Name</th>
            <th>Password</th>
            <th>Email</th>
            <th>Address</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {list.map((emp, index) => (
            <tr key={index + 1}>
              <td>{index + 1}</td>
              <td>{emp.name}</td>
              <td>{emp.password}</td>
              <td>{emp.email}</td>
              <td>{emp.address}</td>
              <td>
                <button><Link to={`/edit/${emp.email}`}>Edit</Link>{" "}</button>
                <button onClick={() => handleDelete(emp.email)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
     
    </div>
  );
}
