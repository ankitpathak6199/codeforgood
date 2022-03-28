import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import './NavbarsStylesheet.css'

const Naavbar = ({ logoutUser }) => {
  return (
    <div>
      <Navbar bg="" expand="lg " id="h">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/" className="links brandname">TheCollectiveConsciousness</Nav.Link>
            <Nav.Link as={Link} to="/" className="links">Profile</Nav.Link>
            <Nav.Link as={Link} to="/resources" className="links">Resources</Nav.Link>
            <Nav.Link href="http://devi.boilerplate.in/games" target="_blank" className="links">Games</Nav.Link>
            <Nav.Link href="http://devi.boilerplate.in/" target="_blank" className="links">About</Nav.Link>
            <Nav.Link as={Link} to="/" onClick={() => logoutUser()} className="links">Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>

  )
}

export default Naavbar