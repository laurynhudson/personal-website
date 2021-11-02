import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import NavbarComponent from "./components/Navbar";
import FooterComponent from "./components/Footer";

function App() {
  const Home = () => {
    return (
      <div className="App">
        <NavbarComponent></NavbarComponent>
        <div className="split-left">
          <div className="centered">
            <div className="headshot">
              <img
                src="../headshotlilac.jpg"
                alt="Black woman in tech"
                height="270px"
              ></img>
            </div>
          </div>
        </div>
        <div className="split-right">
          <div className="centered">
            <div className="Intro">Hello</div>
            <div className="about">
              <h4>Who I am + what I do</h4>
              <p>
                I'm a Software Engineer at JP Morgan Chase & Co. My mission: to
                help tech become a more inclusive space, along with helping
                society become more sustainable through technology.{" "}
              </p>
              <Link to="/resume">
                <button className="round pink">Resume</button>
              </Link>
              <Link to="/projects">
                <button className="round">Projects</button>
              </Link>
              <Link to="/blog">
                <button className="round grey">Blog</button>
              </Link>
            </div>
          </div>
        </div>
        <FooterComponent></FooterComponent>
      </div>
    );
  };

  const Resume = () => {
    return <h2>Resume goes here</h2>;
  };

  const Projects = () => {
    return <h2>Projects go here</h2>;
  };

  const Blog = () => {
    return <h2>Blog goes here</h2>;
  };
  return (
    <Router>
      <Switch>
        <Route path="/resume" component={Resume}></Route>
        <Route path="/projects" component={Projects}></Route>
        <Route path="/" component={Home} exact></Route>
        <Route path="/blog" component={Blog}></Route>
      </Switch>
    </Router>
  );
}

export default App;
