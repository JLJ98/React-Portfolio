
import './Contact.css'; // Adjust the path if your CSS file is in a different directory

const Contact = () => {
  return (
    <div className="contact-container">
      <h2>Contact Me</h2>
      <p>If you have any questions or would like to get in touch, feel free to contact me:</p>
      <ul className="contact-info">
        <li>Email: <a href="mailto:jonlukejenkins2@gmail.com">jonlukejenkins2@gmail.com</a></li>
        <li>Phone: <a href="tel:+15013528709">501-352-8709</a></li>
        {/* Add more contact details as needed */}
      </ul>
      <form className="contact-form">
        <div className="form-group">
          <input type="text" id="name" className="form-control" placeholder="Your Name" required />
        </div>
        <div className="form-group">
          <input type="email" id="email" className="form-control" placeholder="Your Email" required />
        </div>
        <div className="form-group">
          <textarea id="message" className="form-control" placeholder="Your Message" required></textarea>
        </div>
        <button type="submit" className="submit-btn">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
