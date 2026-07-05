import "./VillainSection.css";
import villains from "../../data/villains";
import VillainCard from "../VillainCard/VillainCard";

function VillainSection() {
  return (
    <section id="villains" className="villains">
      <h1>Legendary Villains</h1>

      <div className="villain-grid">
        {villains.map((villain) => (
          <VillainCard key={villain.id} villain={villain} />
        ))}
      </div>
    </section>
  );
}

export default VillainSection;