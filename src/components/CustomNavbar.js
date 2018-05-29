import React, { Component } from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './CustomNavbar.css'

class CustomNavbar extends Component {
    render() {
        return (
            <Navbar default collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        Basic Website
                    </Navbar.Brand>
                    <Navbar.Toggle/>
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        <NavItem eventKey={1} commandClass={Link} href="/" to="/">
                        Home
                        </NavItem>
                        <NavItem eventKey={2} commandClass={Link} href="/news" to="/">
                        News
                        </NavItem>
                        <NavItem eventKey={3} commandClass={Link} href="/about" to="/">
                        About
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default CustomNavbar;