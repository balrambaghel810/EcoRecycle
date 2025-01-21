// Home.jsx
import "../Styles/Home.css"; // Import the CSS file for styling

const Home = () => {
  return (
    <div className="home">
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to Ecorecycle</h1>
          <p className="hero-description">
            Join us in building a sustainable future by recycling and reusing
            resources.
          </p>
          <a href="#services" className="hero-btn">
            Learn More
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
