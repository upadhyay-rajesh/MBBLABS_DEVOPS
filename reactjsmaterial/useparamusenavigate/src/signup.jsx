import React, { Component } from 'react';
import FeedbackComponent from './feedback.jsx';

class SignUpComponent extends Component {
    state = { 
        "name": "Rajesh",
        "email": "upadhyay.rajesh@rediffmail.com",

        "employees": [
            { "name": "Rajesh", "email": "upadhyay.rajesh"},
            { "name": "Suresh", "email": "suresh@"},
            { "name": "Mahesh", "email": "mahesh@"}
        ]
     } 
    render() { 
        return (
            <div>
                <h1>Sign Up</h1>
                <p>Welcome to the Sign Up page!</p>
                <p>Name: {this.state.name}</p>
                <p>Email: {this.state.email}</p>

            <!-- myname, myemail, myemployees comes under props in FeedbackComponent -->
                <FeedbackComponent myname={this.state.name} myemail={this.state.email} myemployees={this.state.employees}/>
            </div>
        );
    }
}
 
export default SignUpComponent;