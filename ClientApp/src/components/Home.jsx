import React, { Component } from 'react';
import './Home.scss';

export class Home extends Component {
    static displayName = Home.name;

    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
                <div className="input_background">
                    <div className="input_background__background2"></div>
                    <div className="input_background__background1"></div>
                </div>
            
        );
    }
}