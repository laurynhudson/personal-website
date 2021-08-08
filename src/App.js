import "./App.css";
import NavbarComponent from "./components/Navbar";
import FooterComponent from "./components/Footer";
import { Card, CardTitle, CardBody, CardText, Row, Col } from "reactstrap";

function App() {
  return (
    <div className="App">
      <NavbarComponent></NavbarComponent>
      <div className="MyName">LAURYN HUDSON</div>
      <div className="Welcome">
        <h1>HI THERE 👋🏾 I'M LAURYN!</h1>
      </div>

      <div className="Intro">
        <p>
          I'm a Software Engineer in FinTech who is
          <i> passionate </i> about how to use technology to make the world a
          better place. My mission is to help tech become a more{" "}
          <i>inclusive</i> space, by helping bridge the gap betweent the
          industry and communities who have historically been underrepresented,
          along with helping society become more <i>sustainable </i>
          through technology.{" "}
        </p>
        <p>🌎♻️❤️🤝</p>
      </div>

      <div>
        <img
          className="headshot"
          src="../headshot.jpg"
          alt="black girl
          technologist"
        ></img>
      </div>

      <div className="What">
        <h2>WHAT I DO</h2>
      </div>

      <div className="Experience">
        <Row>
          <Col sm="6">
            <Card
              className="ExperienceDetails"
              style={{ backgroundColor: "lavender", borderColor: "lavender" }}
            >
              <CardTitle>
                <h2>SOFTWARE ENGINEERING 💻</h2>
              </CardTitle>
              <CardBody>
                As a software engineer at JP Morgan Chase, I develop, test, and
                deploy application features with 50,000 end users. This helps
                streamline investment bankers process for creating pitch decks.
              </CardBody>
            </Card>
          </Col>
          <Col sm="6">
            <Card
              className="CommunityWork"
              style={{ backgroundColor: "lavender", borderColor: "lavender" }}
            >
              <CardTitle>
                <h2>COMMUNITY WORK 🤝🏽</h2>
              </CardTitle>
              <CardBody>
                <CardText>
                  <h5>CODE FOR THE CULTURE</h5>
                  Code for the Culture is...
                </CardText>
                <CardText>
                  <h5>HOUSTON SUSTAINABILITY ORG</h5>
                  As the lead communications officer for the Houston
                  Sustainability Workstream, I work to coordinate, plan, and
                  host events with various guest speakers to increase employees’
                  awareness and engagement in sustainability practices.
                </CardText>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col sm="6">
            <Card
              className="TechnicalSkills"
              style={{ backgroundColor: "lavender", borderColor: "lavender" }}
            >
              <CardTitle>
                <h2>TECHNOLOGIES/FRAMEWORKS ⚙️</h2>
              </CardTitle>
              <CardBody>
                <CardText>
                  <h4>I currently use:</h4>
                </CardText>
                <CardText>C#/.NET, JavaScript, React, Mongo</CardText>
                <CardText>
                  Agile, Jira, Confluence, BitBucket, DevOps, Jules, CI/CD
                </CardText>
                <CardText>
                  <h4>I have experience with:</h4>
                </CardText>
                <CardText>Java, Python, SQL, AWS</CardText>
              </CardBody>
            </Card>
          </Col>
          <Col sm="6">
            <Card
              className="Education"
              style={{ backgroundColor: "lavender", borderColor: "lavender" }}
            >
              <CardTitle>
                <h2>EDUCATION 🎓</h2>
              </CardTitle>
              <CardBody>
                <CardText>Computer Science BS,</CardText>
                <CardText>Xavier University of Louisiana</CardText>
                <CardText>2016-2020</CardText>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
      <FooterComponent></FooterComponent>
    </div>
  );
}

export default App;
