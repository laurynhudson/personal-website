import { Card, CardTitle, CardBody, CardText, Row, Col } from "reactstrap";
import "../styling/Resume.css";

const ResumeComponent = () => {
  return (
    <div className="Experience">
      <Row>
        <Col sm="12">
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
        <Col sm="12">
          <Card
            className="CommunityWork"
            style={{ backgroundColor: "lavender", borderColor: "lavender" }}
          >
            <CardTitle>
              <h2>COMMUNITY WORK 🤝🏽</h2>
            </CardTitle>
            <CardBody>
              <CardText>
                <h5>CODE FOR THE CULTURE: CEO</h5>
                Code for the Culture is an organization focused on creating a
                better pipeline for tech talent from underrepresented groups. We
                teach people how to code, and help companies hire diverse talent
                with our students.
              </CardText>
              <CardText>
                <h5>HOUSTON SUSTAINABILITY ORG: Lead Communications Officer</h5>
                As the lead communications officer for the Houston
                Sustainability Workstream, I work to coordinate, plan, and host
                events with various guest speakers to increase employees’
                awareness and engagement in sustainability practices.
              </CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col sm="12">
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
        <Col sm="12">
          <Card
            className="Education"
            style={{ backgroundColor: "lavender", borderColor: "lavender" }}
          >
            <CardTitle>
              <h2>EDUCATION 🎓</h2>
            </CardTitle>
            <CardBody>
              <CardText>Computer Science BS</CardText>
              <CardText>Xavier University of Louisiana</CardText>
              <CardText>2016-2020</CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default ResumeComponent;
