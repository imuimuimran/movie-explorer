import { useEffect, useState } from "react";
import { getShows, searchShows } from "../api/tvmaze";
import MovieCard from "../components/MovieCard";
import MovieModal from "../components/MovieModal";

function Movies() {
  const [shows, setShows] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedShow, setSelectedShow] = useState(null);

  useEffect(() => {
    async function loadShows() {
      try {
        setLoading(true);
        setError("");

        const data = await getShows();
        setShows(data);
      } catch (err) {
        console.error(err);
        setError("Failed to load shows.");
      } finally {
        setLoading(false);
      }
    }

    loadShows();
  }, []);

  async function handleSearch(event) {
    event.preventDefault();

    const query = search.trim();

    if (!query) {
      try {
        setLoading(true);
        setError("");

        const data = await getShows();
        setShows(data);
      } catch (err) {
        console.error(err);
        setError("Failed to load shows.");
      } finally {
        setLoading(false);
      }

      return;
    }

    try {
      setLoading(true);
      setError("");

      const data = await searchShows(query);
      const results = data.map((item) => item.show);

      setShows(results);
    } catch (err) {
      console.error(err);
      setError("Failed to search shows.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="movies-page">
      <div className="container">

        <div className="movies-heading">
          <p className="eyebrow">MOVIE EXPLORER</p>

          <h1>Explore Movies & Shows</h1>

          <p>
            Search for movies and shows and explore their details.
          </p>
        </div>

        <form className="search-form" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search for a movie or show..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />

          <button type="submit">
            Search
          </button>
        </form>

        {loading && (
          <p className="status-message">
            Loading...
          </p>
        )}

        {error && (
          <p className="status-message">
            {error}
          </p>
        )}

        {!loading && !error && (
          <section className="movie-grid">
            {shows.map((show) => (
              <MovieCard
                key={show.id}
                show={show}
                onDetails={setSelectedShow}
              />
            ))}
          </section>
        )}


        <MovieModal
          show={selectedShow}
          onClose={() => setSelectedShow(null)}
        />

        
      </div>
    </main>
  );
}

export default Movies;