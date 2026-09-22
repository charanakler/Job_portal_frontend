import React from "react";
import { Link } from "react-router-dom";
import jobs from "../data/jobs.json";
import JobCard from "../components/JobCard";

function Home() {
  const featuredJobs = jobs.slice(0, 3);

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <p className="hero-tag">🚀 Start Your Career Today</p>

          <h1>
            Find Your <span>Dream Job</span>
          </h1>

          <p className="hero-description">
            Discover exciting job opportunities and take the next step in your
            career.
          </p>

          <div className="hero-buttons">
            <Link to="/jobs">
              <button className="primary-button">🔍 Find Jobs</button>
            </Link>

            <Link to="/register">
              <button className="secondary-button">Create Account</button>
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="categories">
        <h2>Popular Categories</h2>

        <div className="category-container">
          <div className="category">
            <h3>💻 Software Development</h3>
            <p>120+ Jobs</p>
          </div>

          <div className="category">
            <h3>🎨 UI/UX Design</h3>
            <p>80+ Jobs</p>
          </div>

          <div className="category">
            <h3>📊 Data Analytics</h3>
            <p>60+ Jobs</p>
          </div>

          <div className="category">
            <h3>📢 Marketing</h3>
            <p>50+ Jobs</p>
          </div>
        </div>
      </section>

      {/* Featured Jobs */}
      <section className="featured-jobs">
        <h2>Featured Jobs</h2>

        <div className="jobs-container">
          {featuredJobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>

        <Link to="/jobs">
          <button>View All Jobs</button>
        </Link>
      </section>

      {/* Why Choose Us */}
      <section className="why-us">
        <h2>Why Choose JobPortal?</h2>

        <div className="why-container">
          <div>
            <h3>🔍 Easy Job Search</h3>
            <p>Find jobs quickly using our powerful search and filters.</p>
          </div>

          <div>
            <h3>❤️ Save Jobs</h3>
            <p>Save interesting jobs and apply whenever you're ready.</p>
          </div>

          <div>
            <h3>📋 Easy Application</h3>
            <p>Apply for jobs using a simple application process.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
