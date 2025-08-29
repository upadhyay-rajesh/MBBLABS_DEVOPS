import React, { Component } from 'react';
import { useState, useEffect } from 'react';
import FeedbackFunctionalComponent from './feedback';
import EmployeeService1 from '../service/employeeservice1';
function RegisterFunctionComponent() {
        const [name, setName] = useState('Rajesh');
        const [password, setPassword] = useState('abcd');
        const [email, setEmail] = useState('abc@yahoo.com');
        const [address, setAddress] = useState('Chennai');
        const [employees, setEmployees] = useState([]);
        const [message, setMessage] = useState('');

        useEffect(() => {
            //componentDidMount
            console.log("Component Mounted");
           EmployeeService1.getEmployees().subscribe((res) => 
           {
            console.log(res.data);
            setEmployees(res.data);
           });
            //api call
           //setEmployees(res.data);
            //api call
        }, [message ]);

    return ( 
        <div>
            { name } - {password} - {email} - {address}

            <FeedbackFunctionalComponent myname={name}></FeedbackFunctionalComponent>

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
                            </tr>
                        )
                    }
                </tbody>
            </table>


        </div>
     );
}

export default RegisterFunctionComponent;