// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import EmployeeList from "./employeeList";
import EmployeeForm from "./employeeForm";

export default function App() {
  return (
    <Router>
      <div style={{ padding: 20 }}>
        <h1>Employee Management</h1>
        <nav>
          <Link to="/">Employees</Link> | <Link to="/add">Add Employee</Link>
        </nav>

        <Routes>
          <Route path="/" element={<EmployeeList />} />
          <Route path="/add" element={<EmployeeForm />} />
          <Route path="/edit/:id" element={<EmployeeForm />} />
        </Routes>
      </div>
    </Router>
  );
}
