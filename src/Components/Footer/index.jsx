import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer style={{ textAlign: 'center', padding: '20px 0', marginTop: '20px', backgroundColor: '#f8f9fa' }}>
      <a href="https://github.com/JLJ98" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px' }}>
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>
      <a href="https://www.linkedin.com/in/jon-luke-jenkins-7850231a8/" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px' }}>
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>
      {/* Twitter link */}
      <a href="https://twitter.com/crossfadeprod" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px' }}>
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
    </footer>
  );
};

export default Footer;
