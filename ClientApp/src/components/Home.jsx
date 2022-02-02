import React, { Component } from 'react';
import { Container, Row, Col} from 'reactstrap';
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
            <Container fluid>
                <Row>
                    <Col sm="6">
                        <div className="input_background"></div>
                    </Col>

                    <Col sm="6">
                        Stop wasting time in queues use smart queue service today
                    </Col>
                </Row>
            </Container>
        );
    }
}