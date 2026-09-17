function MovieCard({ show, onDetails }) {
  const imageUrl =
    show.image?.medium ||
    "https://via.placeholder.com/210x295?text=No+Image";

  const releaseYear = show.premiered
    ? new Date(show.premiered).getFullYear()
    : "N/A";

  const rating = show.rating?.average || "N/A";

  return (
    <article className="movie-card">
      <img
        src={imageUrl}
        alt={show.name}
        className="movie-card-image"
      />

      <div className="movie-card-content">
        <h2>{show.name}</h2>

        <div className="movie-card-meta">
          <span>{releaseYear}</span>
          <span>⭐ {rating}</span>
        </div>

        <button
          type="button"
          className="details-button"
          onClick={() => onDetails(show)}
        >
          See Details
        </button>
      </div>
    </article>
  );
}

export default MovieCard;