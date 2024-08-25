import React from 'react';
import './Home.css'; // Custom CSS for this page


const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="blurred-background">
          <div className="hero-content">
            <div className="logo-wrapper">
              <img src="/src/assets/Untitled design.png" alt="Club Logo" className="beating-logo" />
            </div>
            <div className="text-overlay">
              <h1 className="hero-title">Welcome to GFORGE Club</h1>
              <p className="hero-subtitle">Join us in creating amazing games, learning new skills, and building a future full of creativity and innovation in the gaming world.</p>
              <button className="hero-btn" onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}>
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about" id="about">
        <div className="about-content">
          <h2 className="about-title">About Our Club</h2>
          <p className="about-description">
            We are a passionate group of game developers, artists, and storytellers who create and collaborate to build amazing games. Join us to learn, grow, and bring your game ideas to life with a supportive community!
          </p>
          <div className="logo-wrapper">
            <img src="/path-to-your-logo.png" alt="Club Logo" className="club-logo" />
          </div>
          <a href="#learn-more" className="about-btn">Learn More</a>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section id="events" className="events">
        <h2>Upcoming Events</h2>
        <ul className="events-list">
          <li className="event-item">
            <h3>Game Jam - September 15, 2024</h3>
            <p>Join us for a 48-hour game development challenge!</p>
          </li>
          <li className="event-item">
            <h3>Unity Workshop - October 5, 2024</h3>
            <p>Learn how to create stunning games with Unity.</p>
          </li>
          <li className="event-item">
            <h3>Guest Speaker: Indie Developer - November 12, 2024</h3>
            <p>Get inspired by stories from a successful indie game developer.</p>
          </li>
        </ul>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <h2>Featured Projects</h2>
        <div className="project-grid">
          <div className="project-item">
            <img src="/path-to-image/project1-poster.jpg" alt="Project 1 Poster" className="project-poster" />
            <h3>Project 1</h3>
            <p>Explore the mysteries of space in this Unity-built sci-fi adventure.</p>
          </div>
          <div className="project-item">
            <img src="/path-to-image/project2-poster.jpg" alt="Project 2 Poster" className="project-poster" />
            <h3>Project 2</h3>
            <p>A thrilling platformer that tests your agility and quick thinking.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
