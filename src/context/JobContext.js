import React, { createContext, useEffect, useState } from "react";

const JobContext = createContext();

function JobProvider({ children }) {
  const [savedJobs, setSavedJobs] = useState(() => {
    const storedJobs = localStorage.getItem("savedJobs");

    return storedJobs ? JSON.parse(storedJobs) : [];
  });

  useEffect(() => {
    localStorage.setItem("savedJobs", JSON.stringify(savedJobs));
  }, [savedJobs]);

  const saveJob = (job) => {
    const alreadySaved = savedJobs.some((savedJob) => savedJob.id === job.id);

    if (!alreadySaved) {
      setSavedJobs([...savedJobs, job]);
    }
  };

  const removeJob = (jobId) => {
    setSavedJobs(savedJobs.filter((job) => job.id !== jobId));
  };

  const isJobSaved = (jobId) => {
    return savedJobs.some((job) => job.id === jobId);
  };

  return (
    <JobContext.Provider
      value={{
        savedJobs,
        saveJob,
        removeJob,
        isJobSaved,
      }}
    >
      {children}
    </JobContext.Provider>
  );
}

export { JobContext, JobProvider };
