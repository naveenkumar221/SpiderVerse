import "./FeaturedMovie.css";
import { motion } from "framer-motion";

function FeaturedMovie() {
  return (
    <section className="featured">

      <div className="featured-overlay"></div>

      <motion.div
        className="featured-content"
        initial={{ opacity: 0, x: -120 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
       <span>🔥 Upcoming Spider-Man Movie</span>

<h1>Spider-Man: Brand New Day (2026)</h1>
<p className="release-date">📅 Releasing July 31, 2026</p>

<p>
The next chapter of Spider-Man arrives on July 31, 2026.
Tom Holland returns as Peter Parker in a brand-new adventure
set in the Marvel Cinematic Universe. Explore the latest
trailer, news, and updates from the SpiderVerse.
</p>

       <button
  onClick={() =>
    window.open("https://youtu.be/62bIsvRcPv0", "_blank")
  }
>
  ▶ Watch Official Trailer
</button>
      </motion.div>

      <motion.div
        className="featured-video"
        initial={{ opacity: 0, x: 120 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="https://res.cloudinary.com/piobqzyd/video/upload/v1783240034/new1_avvdam.mp4" type="video/mp4" />
        </video>
      </motion.div>

    </section>
  );
}

export default FeaturedMovie;