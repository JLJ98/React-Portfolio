import './Resume.css'; // Make sure the CSS file is linked correctly

const Resume = () => {
  return (
    <div className="resume-container">
      <h1>Resume</h1>
      
      <section className="skills-section">
        <h2></h2>
        <div className="skills-container">
          <div className="skill-category">
            <h3>Front-End Proficiencies</h3>
            <ul>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Redux</li>
            
            </ul>
          </div>
          <div className="skill-category">
            <h3>Back-End Proficiencies</h3>
            <ul>
              <li>Node.js</li>
              <li>Express</li>
              <li>MySQL</li>
              <li>MongoDB</li>
              <li>Python</li>
           
            </ul>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Resume;
