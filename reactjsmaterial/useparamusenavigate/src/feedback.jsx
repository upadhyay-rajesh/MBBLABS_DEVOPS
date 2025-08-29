import React, { Component } from 'react';

class FeedbackComponent extends Component {
    state = {  } 
    render() { 
        return (
            <div>
                <h1>Feedback</h1>
                <p>We value your feedback!</p>
                <p>Please share your thoughts with us.</p>
                <p>Your Name: {this.props.myname}</p>
                <p>Your Email: {this.props.myemail}</p>

                {
                   
                                this.props.myemployees.map((employee, index) => (
                                    <li key={index}>{employee.name} - {employee.email}</li>
                                ))
                           
                }
            </div>
        );
    }
}
 
export default FeedbackComponent;