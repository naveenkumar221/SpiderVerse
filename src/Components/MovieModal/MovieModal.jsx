import "./MovieModal.css";

function MovieModal({ movie, onClose }) {
  if (!movie) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Icon */}
        <button
          className="close-icon"
          onClick={onClose}
        >
          ✖
        </button>

        <img src={movie.image} alt={movie.title} />

        <div className="modal-content">
          <h1>{movie.title}</h1>

          <p><strong>⭐ Rating:</strong> {movie.rating}</p>

          <p><strong>📅 Year:</strong> {movie.year}</p>

          <p><strong>🎬 Director:</strong> {movie.director}</p>

          <p><strong>🎭 Cast:</strong> {movie.cast}</p>

          <p>{movie.description}</p>

          <button
            className="trailer-btn"
            onClick={() => window.open(movie.trailer, "_blank")}
          >
            ▶ Watch Trailer
          </button>
        </div>
      </div>
    </div>
  );
}

export default MovieModal;