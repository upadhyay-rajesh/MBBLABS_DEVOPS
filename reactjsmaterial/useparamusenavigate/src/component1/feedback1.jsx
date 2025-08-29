import React, { Component } from 'react';

class FeedbackComponent extends Component {
    state = {  } 
    render() { 
        return (
            <div>
                {this.props.myname} - This is Feedback Component
            </div>
        );
    }
}
 
export default FeedbackComponent;