import React from 'react';
import './home.css'

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <h1>Welcome to the Game Development Club</h1>
        <p>Join us in creating amazing games and learning new skills together!</p>
      </section>

      <section className="about">
        <h2>About Us</h2>
        <p>
          We are a group of passionate game developers who meet regularly to build games, 
          collaborate on projects, and share knowledge. Whether you're a beginner or an 
          experienced developer, there's a place for you in our community.
        </p>
      </section>

      <section className="projects">
        <h2>Featured Projects</h2>
        <div className="project-list">
          <div className="project-item">
            <img src="/path-to-image/project1.jpg" alt="Project 1" />
            <h3>Project 1</h3>
            <p>An exciting game built with Unity that explores the depths of space.</p>
          </div>
          <div className="project-item">
            <img src="/path-to-image/project2.jpg" alt="Project 2" />
            <h3>Project 2</h3>
            <p>A fast-paced platformer that challenges your reflexes and timing.</p>
          </div>
        </div>
      </section>

      <section className="events">
        <h2>Upcoming Events</h2>
        <ul>
          <li>Game Jam - September 15, 2024</li>
          <li>Unity Workshop - October 5, 2024</li>
          <li>Guest Speaker: Indie Game Developer - November 12, 2024</li>
        </ul>
      </section>

      <section className="join">
        <h2>Join the Club</h2>
        <p>
          Ready to get involved? We meet every week and welcome new members to join us.
          Whether you're a programmer, artist, designer, or just love games, we want to hear from you!
        </p>
        <button>Join Now</button>
      </section>
    </div>
  );
};

export default Home;
