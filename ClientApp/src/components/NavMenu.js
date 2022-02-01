import React, { Component } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';

export class NavMenu extends Component {
    static displayName = NavMenu.name;

    constructor(props) {
        super(props);

        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.logIn = this.logIn.bind(this);
        this.state = { collapsed: true , logged: false};
    }

    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }

    logIn() {
        this.setState({ logged: true });
    }

    render() {
        return (
            <header>
                <Navbar className="navbar-expand-lg navbar-toggleable-lg">
                    <Container fluid>
                        <NavbarBrand href="/">
                            <img src="/logo.svg" alt=""/>
                        </NavbarBrand>
                        <NavbarToggler onClick={this.toggleNavbar} className="ml-auto" />
                        <Collapse className="navbar-nav" isOpen={!this.state.collapsed} navbar>
                            <ul className="navbar-nav">
                                <NavItem>
                                    <NavLink tag={Link} to="/createqueue">Create Queue</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={Link} to="/myqueues">My Queues</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={Link} to="/about">About</NavLink>
                                </NavItem>
                            </ul>

                            <ul className="navbar-nav al_right">
                                <NavItem>
                                    <NavLink tag={Link} to="/">Log In</NavLink>
                                </NavItem>
                                <NavItem>
                                    <img href="/" src="/logo.svg" alt="" height="60" />
                                </NavItem>
                            </ul>

                        </Collapse>
                    </Container>
                </Navbar>
            </header>
        );
    }
}
