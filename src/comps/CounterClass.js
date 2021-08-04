import React, { Component } from 'react';

import { CounterContext } from '../context/CounterContext';

class CounterClass extends Component {
    render() {
        const { counter } = this.context;
        return (
            <div>
                <h2>Counter from class comp is : {counter}</h2>
            </div>
        )
    }
}

CounterClass.contextType = CounterContext; // this will throw a reference error, need to move the context declaration to a different file from app.js

export default CounterClass