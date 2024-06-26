import './Projects.css'; // make sure the CSS file is linked correctly

const Projects = () => {
  return (
    <div className="projects-grid">
      {/* Project 1 */}
      <div className="project-card">
        <div className="project-image" style={{ backgroundImage: 'url(https://github.com/JLJ98/Code-Quiz/blob/main/assets/images/Code_quiz.png?raw=true)' }}></div>
        <div className="project-info">
          <h3>Project 1</h3>
          <p>Code Quiz</p>
          <a href="https://jlj98.github.io/Code-Quiz/" target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
      </div>
      
      {/* Project 2 */}
      <div className="project-card">
        <div className="project-image" style={{ backgroundImage: 'url(src/public/Images/hanzel4.jpg)' }}></div>
        <div className="project-info">
          <h3>Project 2</h3>
          <p>Hanzel</p>
          <a href="https://hanzel.onrender.com/" target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
      </div>

      {/* Project 3 */}
      <div className="project-card">
        <div className="project-image" style={{ backgroundImage: 'url(src/public/Images/Taptempoi.png)' }}></div>
        <div className="project-info">
          <h3>Project 3</h3>
          <p>Tap Tempo App</p>
          <a href="https://github.com/JLJ98/Watch-Tap-Tempo-App" target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
      </div>
      
      {/* Repeat the above structure for other projects if needed */}
    </div>
  );
}

export default Projects;
