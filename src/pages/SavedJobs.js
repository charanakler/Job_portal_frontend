import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { JobContext } from "../context/JobContext";

function SavedJobs() {
  const { savedJobs, removeJob } = useContext(JobContext);

  return (
    <div className="saved-jobs-page">
      <h1>Saved Jobs</h1>

      {savedJobs.length === 0 ? (
        <div className="empty-saved">
          <h2>No Saved Jobs</h2>
          <p>You haven't saved any jobs yet.</p>

          <Link to="/jobs">
            <button>Browse Jobs</button>
          </Link>
        </div>
      ) : (
        <div className="saved-jobs-container">
          {savedJobs.map((job) => (
            <div className="saved-job-card" key={job.id}>
              <h2>{job.title}</h2>

              <h3>{job.company}</h3>

              <p>📍 {job.location}</p>
              <p>💰 {job.salary}</p>
              <p>💼 {job.type}</p>
              <p>🧑‍💻 {job.experience}</p>

              <div>
                {job.skills.map((skill, index) => (
                  <span key={index} className="skill">
                    {skill}
                  </span>
                ))}
              </div>

              <div className="saved-job-buttons">
                <Link to={`/jobs/${job.id}`}>
                  <button>View Details</button>
                </Link>

                <button onClick={() => removeJob(job.id)}>Remove</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SavedJobs;
