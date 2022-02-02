import React, { Component } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './Account.scss';

export class Account extends Component {
    static displayName = Account.name;

    render() {
        return (
            <div>
                <br></br>
                <form class="search" action="">
                    <input type="text" name="q"/>
                </form> <br></br>

                <form class="search" action="">
                    <input type="text" name="q"/>
                </form> <br></br>

                <form class="search" action="">
                    <input type="text" name="q"/>
                </form> <br></br>

                <form class="search" action="">
                    <input type="submit" value="Change"/>
                </form> <br></br>

            </div>
        );
    }
}
