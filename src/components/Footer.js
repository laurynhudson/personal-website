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
            <NavLink href="">Email</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://www.linkedin.com/in/lauryn-hudson/">
              Linkedin
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://twitter.com/___lauryn">Twitter</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
};

export default FooterComponent;
