import "../styling/Navbar.css";
import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";

const NavbarComponent = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="navContainer">
      <Navbar color="lavender" light expand="md">
        <NavbarBrand href="/">Lauryn Hudson</NavbarBrand>
        <Nav>
        <NavItem>
              <NavbarText>Software Engineer</NavbarText>
            </NavItem>
            </Nav>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
            <Nav className="ms-auto">
            <NavItem>
            <NavLink>Resume</NavLink>
            </NavItem>
            <NavItem>
            <NavLink>Projects</NavLink>
            </NavItem>
            <NavItem>
            <NavLink>Blog</NavLink>
            </NavItem>
            </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
