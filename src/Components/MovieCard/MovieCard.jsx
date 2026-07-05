import "./MovieCard.css";

function MovieCard({ movie, isFavorite, toggleFavorite }) {
  return (
    <div className="movie-card">

      <div
        className="favorite"
        onClick={(e) => {
          e.stopPropagation();
          toggleFavorite(movie.id);
        }}
      >
        {isFavorite ? "❤️" : "🤍"}
      </div>

      <img src={movie.image} alt={movie.title} />

      <div className="movie-info">
        <div className="movie-meta">
          <span>📅 {movie.year}</span>
          <span>⭐ {movie.rating}</span>
        </div>
      </div>

    </div>
  );
}

export default MovieCard;