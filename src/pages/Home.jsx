import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="hero">
      <div className="hero-overlay">
        <div className="container hero-content">

          <p className="eyebrow">
            DISCOVER MOVIES
          </p>

          <h1>
            Explore movies and shows from around the world.
          </h1>

          <p className="hero-description">
            Discover your favorite movies and explore new shows
            in one simple place.
          </p>

          <Link to="/movies" className="hero-cta">
            Explore Now
          </Link>

        </div>
      </div>
    </section>
  );
}

export default Home;