import React, { Component } from 'react';
import { incrementAction, decrementAction } from '../actions/actions';


export default class Counter extends Component {

    render(){

        const { counter, incrementAction, decrementAction } = this.props;

        return <div><button onClick={ () => decrementAction(this.state)}>Decrement</button>&nbsp;{counter}&nbsp;<button onClick={ () => incrementAction(this.state)}>Increment</button></div>
    }
}