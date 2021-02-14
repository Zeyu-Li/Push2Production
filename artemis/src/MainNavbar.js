import react, {Component} from 'react';
import {Navbar, Nav, NavDropdown, Container} from 'react-bootstrap';

export default function MainNavbar(props) {
    // TODO: state on which tab is clicked
    return (
    <Navbar bg="dark" variant="dark" expand="sm" sticky="top">
        <Navbar.Brand href="#home" className="nav-header" onClick={()=>props.setTab("home")}>Calendar App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto nav-links">
            <Nav.Link onClick={()=>props.setTab("home")}>Home</Nav.Link>
            <Nav.Link onClick={()=>props.setTab("summary")}>Summary</Nav.Link>
            <Nav.Link onClick={()=>props.setTab("settings")}>Settings</Nav.Link>
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown> */}
        </Nav>
        </Navbar.Collapse>
    </Navbar>
    )
}