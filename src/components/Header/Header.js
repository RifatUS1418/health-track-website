import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar bg="light" variant="light" sticky="top" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand href="#home" className="fw-bold">Health Track Hospital</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/services">Services</Nav.Link>
                        <Nav.Link as={Link} to="/doctors">Doctors</Nav.Link>
                        {
                            user.email ? <button onClick={logOut} className="btn btn-danger mx-3">Logout</button>
                                :
                                <Nav.Link as={Link} to="/login">Login</Nav.Link>
                        }

                        <Navbar.Text>
                            Signed in as: {user.email && <a href="#login">{user.displayName}</a>}
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;