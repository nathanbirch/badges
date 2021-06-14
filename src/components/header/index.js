import React from 'react';
import './style.module.css';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import Badges from '../../constants/badges';
import classes from './style.module.css';

function Header() {
  return (
    <Navbar
      collapseOnSelect
      expand='lg'
      bg='dark'
      variant='dark'
      className={classes.sticky}>
      <Navbar.Brand href='#home'>BYU-Idaho Computing Badges</Navbar.Brand>
      <Navbar.Toggle aria-controls='responsive-navbar-nav' />
      <Navbar.Collapse id='responsive-navbar-nav'>
        <Nav className='mr-auto'>
          {/* <Nav.Link href='#features'>Badge List</Nav.Link> */}
          <Nav.Link href=''>Hall of Fame</Nav.Link>
          {/* <NavDropdown title='Badge List' id='collasible-nav-dropdown'>
            {Badges.map((b) => (
              <NavDropdown.Item href='' key={Math.random()}>
                {b.title}
              </NavDropdown.Item>
            ))}
          </NavDropdown> */}
        </Nav>
        <Nav>
          <Nav.Link href='#deets'>Help</Nav.Link>
          <Nav.Link eventKey={2} href='#memes'>
            Personal
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
