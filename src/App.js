import "./App.css";
import NavbarComponent from "./components/Navbar";
import FooterComponent from "./components/Footer";
import { Button, Card, CardTitle, CardBody, CardText, Row, Col } from "reactstrap";

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
          I'm a SWE with experience at the largest financial institution in the US. My mission: to help tech become a more{" "}
          inclusive space, along with helping society become more sustainable through technology.{" "}
        </p>
          <button className="round pink">Resume</button>
          <button className="round">Projects</button>
          <button className="round grey">Blog</button>
        </div>
        </div>
      </div>
      <FooterComponent></FooterComponent>
    </div>
  );
}

export default App;
