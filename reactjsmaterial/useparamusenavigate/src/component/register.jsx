import React, { Component } from 'react';
import EmployeeService from '../service/EmployeeService';

class RegisterComponent extends Component {
    state = { 
        username: '',
        password: '',
        email: '',
        address: '',
        employees: []
     } 

     componentDidMount(){
       EmployeeService.getEmployees().then((res) => {
        this.setState({employees: res.data});
         });
        }

    registerMe = () => {

       var employee={
            username: this.state.username,
            password: this.state.password,
            email: this.state.email,
            address: this.state.address
        }

        EmployeeService.createEmployee(employee).then((res) => {
            alert("Registered Successfully");
            this.setState({employees: [...this.state.employees, res.data]});
            }
       
        );
        
    }

    handleUsernameChange = (event) => {
        //console.log(event.target.value);
        this.setState({username: event.target.value});
    }
    handlePasswordChange = (event) => {
       // console.log(event.target.value);
        this.setState({password: event.target.value});
    }
    handleEmailChange = (event) => {
       // console.log(event.target.value);
        this.setState({email: event.target.value});
    }
    handleAddressChange = (event) => {
       // console.log(event.target.value);
        this.setState({address: event.target.value});
    }

    render() { 
        return (<div>

            {
                this.state.employees.map(
                    employee =>
                    <div>
                        {employee.address} {employee.name} {employee.email} {employee.password}
                    </div>
                )
            }
            
                <h1>Register</h1>
               <form>
                <label>Username:</label>
                    <input type="text" name="username" onChange={this.handleUsernameChange} />
                
                <br />
                <label>Password:</label>
                    <input type="password" name="password" onChange={this.handlePasswordChange} />
                
                <br />
                <label>Email:</label>
                    <input type="email" name="email" onChange={this.handleEmailChange} />
                
                <br />
                <label>Address</label>
                    <input type="text" name="address" onChange={this.handleAddressChange} />
                
                <br />
                <input type="button" value="Register" onClick={this.registerMe} />
               </form>

            </div>
        );
    }
}
 
export default RegisterComponent;