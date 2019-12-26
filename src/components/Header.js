// src/components/Header.js

import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

var FA = require('react-fontawesome')

class Header extends React.Component{

    render() {
    return (
        <>
        <style type="text/css">
          {`
             a {
                 color: white;
             }

             a:hover {
                 color: #E52D2D;
             }
         `}
        </style>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="/">
            <img
                alt="Netfis logo"
                src="/img/netfis-dark.svg"
                width="160"
                className="d-inline-block ml-3"
            />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse className="justify-content-end">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/signup">Create your account</Nav.Link>
                <Navbar.Text>
                <Button variant="primary"><FA name="user" /> Log in</Button>
                </Navbar.Text>
            </Navbar.Collapse>
        </Navbar>
        </>
    )}

};

export default Header