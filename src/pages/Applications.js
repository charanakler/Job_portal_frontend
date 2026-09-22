import React, { useEffect, useState } from "react";

function Applications() {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    const storedApplications =
      JSON.parse(localStorage.getItem("applications")) || [];

    setApplications(storedApplications);
  }, []);

  return (
    <div className="applications-page">
      <h1>My Applications</h1>

      {applications.length === 0 ? (
        <div className="empty-applications">
          <h2>No Applications Yet</h2>
          <p>You have not applied for any jobs yet.</p>
        </div>
      ) : (
        <div className="applications-container">
          {applications.map((application) => (
            <div className="application-card" key={application.id}>
              <h2>{application.jobTitle}</h2>

              <h3>{application.company}</h3>

              <p>
                <strong>Applicant:</strong> {application.name}
              </p>

              <p>
                <strong>Email:</strong> {application.email}
              </p>

              <p>
                <strong>Applied Date:</strong> {application.appliedDate}
              </p>

              <p>
                <strong>Status:</strong>{" "}
                <span className="application-status">{application.status}</span>
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Applications;
