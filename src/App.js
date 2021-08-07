import "./App.css";
import NavbarComponent from "./components/Navbar";

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
          I'm a software engineer in FinTech who is curious and passionate about
          how to use technology to make the world a better place. My mission is
          to help tech become a more inclusive space, by helping bridge the gap
          betweent the industry and communities who have historically been
          underrepresented, along with helping society become more sustainable
          through technology.{" "}
        </p>
        <p>🌎♻️❤️🫱🏿‍🫲🏽</p>
      </div>
      <div>
        <img
          className="headshot"
          src="../headshot.jpg"
          alt="black girl
          technologist"
        ></img>
      </div>
      <div className="Experience">
        <h2>Software Engineering 💻</h2>
        <div className="ExperienceDetails">
          As a software engineer at JP Morgan Chase, I develop, test, and deploy
          application features with 50,000 end users. This helps streamline
          investment bankers process for creating pitch decks.
        </div>
        <div className="CommunityWork">
          <h2>Community Work 🤝🏽</h2>
          <h4>Code for the Culture</h4>
          <h4>Houston Sustainability Org</h4>
          <p>
            As the lead communications officer for the Houston Sustainability
            Workstream, I work to coordinate, plan, and host events with various
            guest speakers to increase employees’ awareness and engagement in
            sustainability practices.
          </p>
        </div>
        <div className="Technical Skills">
          <h2>Technologies/Frameworks ⚙️</h2>
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
          <h2>Education 🎓</h2>
          <div>Computer Science BS,</div>
          <div>Xavier University of Louisiana</div>
          <div>2016-2020</div>
        </div>
        <div className="ContactInfo">
          <h2>Connect With Me 📲</h2>
          <div>Email: laurynhudson98@gmail.com</div>
          <div>LinkedIn: https://www.linkedin.com/in/lauryn-hudson/</div>
          <div>Twitter: ___lauryn</div>
        </div>
      </div>
    </div>
  );
}

export default App;
