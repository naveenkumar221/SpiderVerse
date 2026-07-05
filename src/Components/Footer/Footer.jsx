import "./Footer.css";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaHeart,
} from "react-icons/fa";

function Footer() {
  return (
    <footer id="contact" className="footer">

      <h2>🕷 SpiderVerse</h2>

      <p>
        Explore every Spider-Man movie, hero, villain and multiverse.
      </p>

      <div className="social-icons">

        <a
          href="https://github.com/naveenkumar221"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/naveen-kumar-kethyreddy-990637233/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>

        <a href="mailto:naveennaughty160@gmail.com">
          <FaEnvelope />
        </a>

      </div>

      <p className="copyright">
        Made with <FaHeart /> using React • Vite • Framer Motion
      </p>

      <p>© 2026 SpiderVerse. All Rights Reserved.</p>

    </footer>
  );
}

export default Footer;