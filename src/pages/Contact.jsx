import "./Contact.css";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="contact">

      <div className="contact-left">

        <h1>Contact Us</h1>

        <p>
          Have questions about SpiderVerse?
          We'd love to hear from you.
        </p>

        <div className="info">
          <FaEnvelope />
          <span>spiderverse@gmail.com</span>
        </div>

        <div className="info">
          <FaPhoneAlt />
          <span>+91 9876543210</span>
        </div>

        <div className="info">
          <FaMapMarkerAlt />
          <span>New York City</span>
        </div>

      </div>

      <div className="contact-right">

        <form>

          <input type="text" placeholder="Your Name" />

          <input type="email" placeholder="Email" />

          <textarea
            rows="6"
            placeholder="Message"
          ></textarea>

          <button>Send Message</button>

        </form>

      </div>

    </section>
  );
}

export default Contact;