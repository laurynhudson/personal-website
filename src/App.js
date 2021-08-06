import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="MyName">Lauryn Hudson</div>
      <div className="Welcome">
        <h1>Hi friend - I'm Lauryn!</h1>
      </div>
      <div>
        <img
          className="headshot"
          src="../headshot.jpg"
          alt="black girl
          technologist"
        ></img>
      </div>
      <div className="Intro">
        <h5>
          I am a software engineer in FinTech who is curious and passionate
          about how to use technology to make the world a better place. My
          mission is to help tech become a more inclusive space, by helping
          bridge the gap betweent the industry and communities who have
          historically been underrepresented, along with helping society become
          more sustainable through technology.{" "}
        </h5>
      </div>
      <div className="Experience">
        <h2>Software Engineering</h2>
        <div className="ExperienceDetails">
          As a software engineer at JP Morgan Chase, I...
        </div>
      </div>
      <div className="CommunityWork">
        <h2>Community Work</h2>
        <h4>Code for the Culture</h4>
        <h4>Houston Sustainability Org</h4>
      </div>
      <div className="Technical Skills">
        <h2>Stack</h2>
        <div>
          <h4>I currently use:</h4>
          <div>C#/.NET, JavaScript, React, Mongo</div>
          <div>Agile, Jira, Confluence, BitBucket, DevOps, Jules, CI/CD</div>
        </div>
        <div>
          <h4>I have experience with:</h4>
          <div>Java, Python, SQL, AWS</div>
        </div>
      </div>
      <div className="Education">
        <h2>Education</h2>
        <div>Computer Science BS,</div>
        <div>Xavier University of Louisiana</div>
        <div>2016-2020</div>
      </div>
      <div className="ContactInfo">
        <h2>Connect With Me</h2>
        <div>Email: laurynhudson98@gmail.com</div>
        <div>LinkedIn: https://www.linkedin.com/in/lauryn-hudson/</div>
        <div>Twitter: ___lauryn</div>
      </div>
    </div>
  );
}

export default App;
