import "./Timeline.css";
import { motion } from "framer-motion";
import timeline from "../../data/timeline";

function Timeline() {
  return (
    <section id="timeline" className="timeline">
      <h1>Spider-Man Timeline</h1>

      <div className="timeline-container">
        {timeline.map((item) => (
          <motion.div
            className="timeline-card"
            key={item.year}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>{item.year}</h2>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Timeline;