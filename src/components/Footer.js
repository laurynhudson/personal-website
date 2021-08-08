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
        <NavbarBrand href="/">CONNECT WITH ME 📲</NavbarBrand>
        <Nav className="container-fluid" navbar>
          <NavItem className="ml-auto">
            <NavLink href="/components/">email</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://github.com/reactstrap/reactstrap">
              linkedin
            </NavLink>
          </NavItem>
        </Nav>
        <NavbarText className="ml-auto">twitter</NavbarText>
      </Navbar>
    </div>
  );
};

export default FooterComponent;
