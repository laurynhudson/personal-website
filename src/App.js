import "./App.css";
import NavbarComponent from "./components/Navbar";
import FooterComponent from "./components/Footer";
import { Card, CardTitle, CardBody, CardText, Row, Col } from "reactstrap";

function App() {
  return (
    <div className="App">
      <NavbarComponent></NavbarComponent>
      <div className="split-left">
        <div className="centered">
          <div className="headshot">
          <img src="../headshotlilac.jpg" alt="Black woman in tech" height="270px"></img>
          </div>
        </div>
      </div>
      <div className="split-right">
        <div className="centered">
        <div className="Intro">Hello</div>
        <div className="about">
        <h4>Who I am + what I do</h4>
        <p>
          I'm a Software Engineer who is
          <i> passionate </i> about how to use technology to make the world a
          better place. My mission is to help tech become a more{" "}
          <i>inclusive</i> space, by helping bridge the gap betweent the
          industry and communities who have historically been underrepresented,
          along with helping society become more <i>sustainable </i>
          through technology.{" "}
        </p>
        <p>🌎♻️❤️🤝</p>
        </div>
        </div>
      </div>
      <FooterComponent></FooterComponent>
    </div>
  );
}

export default App;
