import "./Hero.css";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

function Hero() {
  return (
   <section id="home" className="hero">

    <img
      src="/images/spider.png"
      alt="Spider"
      className="spider"
    />

      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="https://res.cloudinary.com/piobqzyd/video/upload/v1783241005/hero1_epkpyq.mp4" type="video/mp4" />
      </video>

      <div className="overlay"></div>

      <div className="hero-content">

        <motion.h1
          initial={{ opacity: 0, y: -80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          SpiderVerse
        </motion.h1>

        <TypeAnimation
          sequence={[
            "Welcome to the SpiderVerse",
            2000,
            "Every Hero Has A Story",
            2000,
            "Every Universe Matters",
            2000,
          ]}
          wrapper="h2"
          repeat={Infinity}
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          Experience every Spider-Man movie,
          every hero,
          every villain,
          and every universe.
        </motion.p>

        <motion.div
          className="buttons"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
        >
          <button className="watch-btn">
            Explore
          </button>

          <button className="more-btn">
            Movies
          </button>

        </motion.div>

      </div>

    </section>
  );
}

export default Hero;