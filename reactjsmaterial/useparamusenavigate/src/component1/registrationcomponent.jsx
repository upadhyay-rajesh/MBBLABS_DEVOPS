import React, { Component } from 'react';
import FeedbackComponent from './feedback1';

import EmployeeService1 from '../service/employeeservice1';

class Registrationcomponent extends Component {
    state = { 
        name: '',
        password: '',
        email: '',
        address: '',
        employees: []
     } 

     componentDidMount(){
         EmployeeService1.getEmployees().then((res) => {
            this.setState({employees: res.data});
         });
     }

   handleNameChange=(event) => {
        this.setState({name: event.target.value});
   }
   handlePasswordChange=(event) => {
        this.setState({password: event.target.value});
   }
   handleEmailChange=(event) => {
        this.setState({email: event.target.value});
   }
   handleAddressChange=(event) => {
        this.setState({address: event.target.value});
   }

     registerMe = () => {
       // alert("Registered Successfully");

     var  employee={
        name: this.state.name,
        password: this.state.password,
        email: this.state.email,
        address: this.state.address
       }

         EmployeeService1.createEmployee(employee).then((res) => {
            alert("Registered Successfully");
            this.setState({employees: [...this.state.employees, res.data]});
            
            });
        
     }
     deleteEmployee=(id) => {
        EmployeeService1.deleteEmployee(id).then( (res) => {
            this.setState({employees: this.state.employees.filter(employee => employee.email !== id)});
        });
     }
       

    render() { 
        return (
            <div>
                <form>
                    <h1>Registration Page</h1> <br></br>
                    <label>Username: </label>
                    <input type="text" name="name" onChange={this.handleNameChange} /><br></br>

                    <label>Password: </label>
                    <input type="Password" name="password" onChange={this.handlePasswordChange}/><br></br>

                    <label>Email: </label>
                    <input type="email" name="email" onChange={this.handleEmailChange}/><br></br>

                    <label>Address: </label>
                    <input type="text" name="address" onChange={this.handleAddressChange} /><br></br>

                    <input type="button" value="Register" onClick={this.registerMe}/>
                </form>
                <br></br>
                <center>
                <table border="1">
                    <thead>
                        <tr>
                            <th>Id</th><th>Name</th><th>Password</th><th>Email</th><th>Address</th><th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                {
                    this.state.employees.map(
                        (employee, index) =>
                        <tr key={index+1}>
                            <td>{index+1}</td>
                            <td>{employee.name}</td>
                            <td>{employee.password}</td>
                            <td>{employee.email}</td>
                            <td>{employee.address}</td>
                            <td>
                            <button><a href={'/delete/'+employee.email}>Delete</a></button> &nbsp; &nbsp;
                            <button><a href={'/update/'+employee.email} >Update</a></button>
                           </td>
                        </tr>
                    )
                }
                </tbody>
                </table>
                </center>
            </div>
        );
    }
}
 
export default Registrationcomponent;