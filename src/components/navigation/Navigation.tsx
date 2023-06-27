import React, { ReactElement } from "react";
import { NavLink, Link } from "react-router-dom";
import { Nav, Navbar, Container } from "react-bootstrap";

export default function Navigation(): ReactElement {
    return (
        <Navbar collapseOnSelect fixed="top" expand="sm" bg="dark" variant="dark">
            <Container>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav>
                        <Nav.Link href="/">
                            Home
                        </Nav.Link>
                        <Nav.Link href="/about">
                            About
                        </Nav.Link>
                        <Nav.Link href="/projects">
                            Projects
                        </Nav.Link>
                        <Nav.Link href="https://docs.google.com/document/d/1-FSOXbHT9XxjfvZ4U7CC810RiIhJHWfIKANMNjoK_Vs/edit?usp=sharing" target="_blank">
                            Resume
                        </Nav.Link>
                        <Nav.Link href="/info">
                            Info
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}