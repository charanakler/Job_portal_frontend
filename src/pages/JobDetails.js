import React from "react";
import { Link, useParams } from "react-router-dom";

import jobs from "../data/jobs.json";

function JobDetails() {
  const { id } = useParams();

  const job = jobs.find((job) => job.id === parseInt(id));

  if (!job) {
    return (
      <div className="not-found">
        <h2>Job Not Found</h2>

        <Link to="/jobs">
          <button>Back to Jobs</button>
        </Link>
      </div>
    );
  }

  return (
    <div className="job-details">
      {/* Job Header */}
      <div className="job-header">
        <div>
          <h1>{job.title}</h1>

          <h3>{job.company}</h3>

          <p>📍 {job.location}</p>
        </div>

        <div>
          <Link to={`/jobs/${job.id}/apply`}>
            <button className="apply-button">Apply Now</button>
          </Link>
        </div>
      </div>

      {/* Job Information */}
      <div className="job-info">
        <div>
          <strong>💰 Salary</strong>
          <p>{job.salary}</p>
        </div>

        <div>
          <strong>💼 Job Type</strong>
          <p>{job.type}</p>
        </div>

        <div>
          <strong>🧑‍💻 Experience</strong>
          <p>{job.experience}</p>
        </div>

        <div>
          <strong>🏢 Work Mode</strong>
          <p>{job.workMode}</p>
        </div>
      </div>

      {/* Description */}
      <section className="job-section">
        <h2>Job Description</h2>

        <p>{job.description}</p>
      </section>

      {/* Skills */}
      <section className="job-section">
        <h2>Required Skills</h2>

        <div className="skills-container">
          {job.skills.map((skill, index) => (
            <span key={index} className="skill">
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Requirements */}
      <section className="job-section">
        <h2>Requirements</h2>

        <ul>
          {job.requirements.map((requirement, index) => (
            <li key={index}>{requirement}</li>
          ))}
        </ul>
      </section>

      {/* Back */}
      <Link to="/jobs">
        <button>← Back to Jobs</button>
      </Link>
    </div>
  );
}

export default JobDetails;
