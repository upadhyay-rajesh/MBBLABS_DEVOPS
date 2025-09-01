import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {
        counter: state.counter
    };
}

function dispatchToProps(dispatch) {
    return {
        increment: () => dispatch({ type: 'INCREMENT' }),
        decrement: () => dispatch({ type: 'DECREMENT' })
    };
}

class StatefulRedux extends Component {
    state = {  } 
    render() { 
        return (
            <div>
                <button onClick={this.props.increment}>+</button>
                <button onClick={this.props.decrement}>-</button>
                <h1>Counter {this.props.counter}</h1>
            </div>
        );
    }
}
StatefulRedux = connect(mapStateToProps, dispatchToProps)(StatefulRedux);
 
export default StatefulRedux;