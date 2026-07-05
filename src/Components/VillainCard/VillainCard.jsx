import "./VillainCard.css";

function VillainCard({ villain }) {
  return (
    <div className="villain-card">

      <video
        src={villain.video}
        autoPlay
        muted
        loop
        playsInline
      />

      <div className="villain-info">
        <h2>{villain.name}</h2>

        <p>{villain.actor}</p>

        <span>{villain.movie}</span>
      </div>

    </div>
  );
}

export default VillainCard;