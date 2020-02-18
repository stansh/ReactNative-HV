
import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand,Nav, NavItem} from 'reactstrap';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div className="container ">
     
      <Navbar  sticky="top" expand="md" className="navbar-light row">
        <NavbarBrand href="/" className="mr-auto"><img src="images/logo.png"  width="100" alt="Logo" /></NavbarBrand>
        <NavbarToggler onClick={toggleNavbar}   className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar className="mr-auto">
            <NavItem>
              <NavLink className="nav-link" to="/healththing"><strong>the health thing</strong></NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/snacks"><strong>snacks</strong></NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/recipes"><strong>our recipes</strong></NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/catering"><strong>catering</strong></NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      
    </div>
  );
}

export default Header;