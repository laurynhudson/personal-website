import "../styling/Footer.css";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from "reactstrap";

const FooterComponent = (props) => {
  return (
    <div className="footerContainer">
      <Navbar color="lavender" light expand="md">
        <NavbarBrand href="/">CONNECT WITH ME</NavbarBrand>
        <Nav className="ms-auto">
          <NavItem>
            <NavLink href="/components/">email</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://github.com/reactstrap/reactstrap">
              linkedin
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink>twitter</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
};

export default FooterComponent;
