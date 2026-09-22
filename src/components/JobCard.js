import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { JobContext } from "../context/JobContext";

function JobCard({ job }) {
  const { saveJob, removeJob, isJobSaved } = useContext(JobContext);

  const saved = isJobSaved(job.id);

  const handleSave = () => {
    if (saved) {
      removeJob(job.id);
    } else {
      saveJob(job);
    }
  };

  return (
    <div className="job-card">
      <h3>{job.title}</h3>

      <p>
        <strong>{job.company}</strong>
      </p>

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

      <Link to={`/jobs/${job.id}`}>
        <button>View Details</button>
      </Link>

      <button onClick={handleSave}>{saved ? "❤️ Saved" : "🤍 Save Job"}</button>
    </div>
  );
}

export default JobCard;
