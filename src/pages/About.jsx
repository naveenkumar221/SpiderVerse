import "./About.css";
import { motion } from "framer-motion";

function About() {
  return (
    <section id="about" className="about">

      <motion.div
        className="about-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1>About SpiderVerse</h1>

        <p>
          Welcome to the SpiderVerse.
          Explore every Spider-Man movie,
          hero, villain and multiverse
          from one place.
        </p>
      </motion.div>

      <div className="about-content">

        <div className="about-card">
          <h2>🌍 Multiverse</h2>
          <p>Every universe has its own Spider-Man with unique powers and stories.</p>
        </div>

        <div className="about-card">
          <h2>🎬 Movies</h2>
          <p>Discover every Spider-Man movie, trailers and memorable moments.</p>
        </div>

        <div className="about-card">
          <h2>🕷 Heroes</h2>
          <p>Meet Peter Parker, Miles Morales, Gwen Stacy and more.</p>
        </div>

      </div>

    </section>
  );
}

export default About;
