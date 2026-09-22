import React, { useState } from "react";

import jobsData from "../data/jobs.json";
import JobCard from "../components/JobCard";
import JobFilter from "../components/JobFilter";

function Jobs() {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [experience, setExperience] = useState("");
  const [jobType, setJobType] = useState("");
  const [sort, setSort] = useState("");

  const clearFilters = () => {
    setSearch("");
    setLocation("");
    setExperience("");
    setJobType("");
    setSort("");
  };

  let filteredJobs = jobsData.filter((job) => {
    const searchMatch =
      job.title.toLowerCase().includes(search.toLowerCase()) ||
      job.company.toLowerCase().includes(search.toLowerCase());

    const locationMatch = location === "" || job.location === location;

    const experienceMatch = experience === "" || job.experience === experience;

    const jobTypeMatch = jobType === "" || job.type === jobType;

    return searchMatch && locationMatch && experienceMatch && jobTypeMatch;
  });

  // Sorting
  if (sort === "low") {
    filteredJobs.sort((a, b) => {
      const salaryA = parseFloat(a.salary);
      const salaryB = parseFloat(b.salary);

      return salaryA - salaryB;
    });
  }

  if (sort === "high") {
    filteredJobs.sort((a, b) => {
      const salaryA = parseFloat(a.salary);
      const salaryB = parseFloat(b.salary);

      return salaryB - salaryA;
    });
  }

  if (sort === "name") {
    filteredJobs.sort((a, b) => a.title.localeCompare(b.title));
  }

  return (
    <div className="jobs-page">
      <h1>Find Jobs</h1>

      <JobFilter
        search={search}
        setSearch={setSearch}
        location={location}
        setLocation={setLocation}
        experience={experience}
        setExperience={setExperience}
        jobType={jobType}
        setJobType={setJobType}
        sort={sort}
        setSort={setSort}
        clearFilters={clearFilters}
      />

      <h3>{filteredJobs.length} Jobs Found</h3>

      <div className="jobs-container">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job) => <JobCard key={job.id} job={job} />)
        ) : (
          <h2>No jobs found</h2>
        )}
      </div>
    </div>
  );
}

export default Jobs;
