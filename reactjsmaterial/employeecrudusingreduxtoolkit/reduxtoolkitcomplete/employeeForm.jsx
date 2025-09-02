// src/components/EmployeeForm.js
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addEmployee, updateEmployee } from "./employeeslice";
import api from "./services";
import { useNavigate, useParams } from "react-router-dom";

export default function EmployeeForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const employees = useSelector((state) => state.employees.list);

  const [name, setName] = useState("");
  const[password,setPassword]=useState("");
  const[email,setEmail]=useState("");
    const[address,setAddress]=useState("");
 

  // Load employee data for edit
  useEffect(() => {
    if (id) {
      const existing = employees.find((e) => e.id === parseInt(id));
      if (existing) {
        setName(existing.name);
        setPassword(existing.password);
        setEmail(existing.email);
        setAddress(existing.address);
      } else {
        api.get(`/${id}`).then((res) => {
          setName(res.data.name);
          setPassword(res.data.password);
            setEmail(res.data.email);
            setAddress(res.data.address);
          
        });
      }
    }
  }, [id, employees]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const emp = { name, password,email,address };

    if (id) {
      api.put(`/${id}`, emp).then((res) => {
        dispatch(updateEmployee(res.data));
        navigate("/");
      });
    } else {
      api.post("", emp).then((res) => {
        dispatch(addEmployee(res.data));
        navigate("/");
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{id ? "Edit Employee" : "Add Employee"}</h2>
    
    
            Name: <input type = "text" value={name}onChange={(e) => setName(e.target.value)}></input><br></br>
            Password: <input type = "password" value={password} onChange={(e) => setPassword(e.target.value)}></input><br></br>
            Email: <input type = "email" disabled value={email} onChange={(e) => setEmail(e.target.value)}></input><br></br>
            Address: <input type = "text" value={address} onChange={(e) => setAddress(e.target.value)}></input><br></br>
         
      <button type="submit">{id ? "Update" : "Add"}</button>
    </form>
  );
}
