import React, { useState, useEffect } from 'react';
import Feedback2Component from '../component1/feedback2';
import EmployeeService1 from '../service/employeeservice1';

import { useParams, useNavigate } from "react-router-dom";

function MyRegisterComponent() {

   
    const navigate = useNavigate();
    const[name, setName] = useState('Rajesh');
    const[password, setPassword] = useState('abcd');
    const[email, setEmail] = useState('abc@yahoo.com');
    const[address, setAddress] = useState('Hyderabad');
    const[employees, setEmployees] = useState([]);
    const[message, setMessage] = useState('');

    useEffect( () => {
        EmployeeService1.getEmployees().then(
            response => {
                console.log(response.data);
                setEmployees(response.data);
            }
        )
        
    }, []);

   var updateEmployee = (id) => {
        navigate("/update/"+id);
   }

  var  deleteEmployee = (id) => {
        EmployeeService1.deleteEmployee(id).then( (res) => {
            setEmployees(employees.filter(employee => employee.email !== id));
        });
    }


    return ( 
        <div>
          
            <h1>Register Here</h1>
            <form>
                Name: <input type = "text" value = {name} onChange={ (e) => setName(e.target.value)}></input><br></br>
                Password: <input type = "password" value = {password} onChange={ (e) => setPassword(e.target.value)}></input><br></br>
                Email: <input type = "email" value = {email} onChange={ (e) => setEmail(e.target.value)}></input><br></br>
                Address: <input type = "text" value = {address} onChange={ (e) => setAddress(e.target.value)}></input><br></br>
                <button type = "button" onClick={ () => {
                    var employee = {name, password, email, address};
                    EmployeeService1.createEmployee(employee).then( (response) => {
                        console.log(response.data);
                        setMessage("Employee added successfully");
                        setEmployees([...employees, response.data]);
                    });
                }}>Register</button>
                <br></br>
                {message}
            </form>

            <table border="1">
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>Name</th>
                        <th>Password</th>
                        <th>Email</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        employees.map(
                            (employee,index) => 
                            <tr key = {index+1}>
                                <td>{index+1}</td>
                                <td>{employee.name}</td>
                                <td>{employee.password}</td>
                                <td>{employee.email}</td>
                                <td>{employee.address}</td>
                                <td>
                                    <button onClick={()=>updateEmployee(employee.email)}>update</button>
                                    <button onClick={()=>deleteEmployee(employee.email)}>delete</button>
                                </td>
                            </tr>
                        )

                    }
                </tbody>
            </table>

            <Feedback2Component myname={name}></Feedback2Component>
        </div>
     );
}

export default MyRegisterComponent;