import "./CharacterCard.css";

function CharacterCard({ character }) {
  return (
    <div className="character-card">

      <img src={character.image} alt={character.name} />

      <div className="character-info">
        <h2>{character.name}</h2>

        <p className="actor">{character.actor}</p>

        <span>🌍 {character.universe}</span>
      </div>

    </div>
  );
}

export default CharacterCard;