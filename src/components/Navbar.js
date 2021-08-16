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
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="container-fluid" navbar>
            <NavItem>
              <NavLink href="/components/">Software Engineer</NavLink>
            </NavItem>
            </Nav>
            <Nav className="w-25">
            <NavItem>
            <NavbarText>Resume |</NavbarText>
            </NavItem>
            <NavItem>
            <NavbarText>Projects |</NavbarText>
            </NavItem>
            <NavItem>
            <NavbarText>Blog</NavbarText>
            </NavItem>
            </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
