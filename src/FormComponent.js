import React, { Component } from 'react'

export default class FormComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            input: '',
            summ: 0,
        }

        this.inputChange = this.inputChange.bind(this);
    }

    inputChange(event){
        this.setState({
            input : event.target.value, // это что-то новое, получается
            //Это можно пока запомнить, как какой-то параметр.цель.его значение 
        });
    }

    
    render() {
        return (
            <div>
                <input placeholder="enter your name!" onChange={this.inputChange}/>
                <h3>Value: {this.state.input}</h3>
            </div>
        )
    }
}
