import React, { Component } from 'react';
import { Container, Row, Col, Input, Button} from 'reactstrap';
import './Home.scss';

export class Home extends Component {
    static displayName = Home.name;

    constructor(props) {
        super(props);
        this.state = { id: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ id: event.target.id });
    }

    handleSubmit(event) {
        alert('An id was submitted: ' + this.state.id);
        event.preventDefault();
    }

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col sm="6">
                        <div className="input_background_background">
                            <div className="input_background">
                                <Input value={this.state.value} onChange={this.handleChange} id="idQ" placeholder="ID..."/>
                            </div>
                        </div>

                        <div>
                            <input type="submit" value="Submit" />
                        </div>
                    </Col>

                    <Col sm="6">
                        Stop wasting time in queues use smart queue service today
                    </Col>
                </Row>
            </Container>
        );
    }
}