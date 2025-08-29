import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import EmployeeService1 from '../service/employeeservice1';

function UpdateComponent() {
    const[name, setName] = useState('');
    const[password, setPassword] = useState('');
    const[email, setEmail] = useState('');
    const[address, setAddress] = useState('');

const { id } = useParams(); 
const navigate = useNavigate();

const [employee, setEmployee] = useState({});

useEffect( () => {
        EmployeeService1.getEmployeeById(id).then(
            response => {
                console.log(response.data);
                setEmployee(response.data);
                setName(response.data.name);
                setPassword(response.data.password);
                setEmail(response.data.email);
                setAddress(response.data.address);
            }
        )
        
    }, []);

    const updateEmployee = () => {

         var employee = {name, password, email, address};
         console.log("employee => " + JSON.stringify(employee));
            EmployeeService1.updateEmployee(id, employee).then( (response) => {
                console.log(response.data);
                alert("Employee updated successfully");
                navigate("/register");
            });
    }

    return ( 
        <div>
            Update Component - {id}
            <form>
                Name: <input type = "text" value={name} onChange={ (e) => setName(e.target.value)}></input><br></br>
                Password: <input type = "password" value={password} onChange={ (e) => setPassword(e.target.value)}></input><br></br>
                Email: <input type = "email" value={email} onChange={ (e) => setEmail(e.target.value)} disabled></input><br></br>
                Address: <input type = "text" value={address} onChange={ (e) => setAddress(e.target.value)}></input><br></br>
                <button type = "button" onClick={()=>updateEmployee()}>Update</button>
                <br></br>
            </form>
        </div>
     );
}

export default UpdateComponent;