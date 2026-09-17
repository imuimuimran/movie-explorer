function MovieModal({ show, onClose }) {
  if (!show) {
    return null;
  }

  const imageUrl =
    show.image?.original ||
    show.image?.medium ||
    "https://via.placeholder.com/600x850?text=No+Image";

  const rating = show.rating?.average || "N/A";

  const releaseDate = show.premiered
    ? new Date(show.premiered).toLocaleDateString()
    : "N/A";

  return (
    <div className="modal-overlay">
      <div className="movie-modal">
        <button
          type="button"
          className="modal-close"
          onClick={onClose}
          aria-label="Close details"
        >
          ×
        </button>

        <img
          src={imageUrl}
          alt={show.name}
          className="modal-image"
        />

        <div className="modal-content">
          <h2>{show.name}</h2>

          <div className="modal-meta">
            <span>⭐ {rating}</span>
            <span>{releaseDate}</span>
          </div>

          {show.genres?.length > 0 && (
            <p className="modal-info">
              <strong>Genre:</strong>{" "}
              {show.genres.join(", ")}
            </p>
          )}

          <div
            className="modal-summary"
            dangerouslySetInnerHTML={{
              __html:
                show.summary ||
                "<p>No summary available.</p>",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default MovieModal;