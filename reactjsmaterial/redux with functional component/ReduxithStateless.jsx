import React, { Component } from 'react';

import { useSelector, useDispatch } from 'react-redux';

function ReduxStateless() {
    const counter = useSelector(state => state.counter);
    const dispatch = useDispatch();
    return ( 
        <div>
            <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
            <button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
            <h1>Counter {counter}</h1>
        </div>
     );
}

export default ReduxStateless;