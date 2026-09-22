import React from "react";

function JobFilter({
  search,
  setSearch,
  location,
  setLocation,
  experience,
  setExperience,
  jobType,
  setJobType,
  sort,
  setSort,
  clearFilters,
}) {
  return (
    <div className="filter-container">
      {/* Search */}
      <input
        type="text"
        placeholder="Search job or company"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Location */}
      <select value={location} onChange={(e) => setLocation(e.target.value)}>
        <option value="">All Locations</option>
        <option value="Hyderabad">Hyderabad</option>
        <option value="Bangalore">Bangalore</option>
      </select>

      {/* Experience */}
      <select
        value={experience}
        onChange={(e) => setExperience(e.target.value)}
      >
        <option value="">All Experience</option>
        <option value="0-1 Years">0-1 Years</option>
        <option value="0-2 Years">0-2 Years</option>
      </select>

      {/* Job Type */}
      <select value={jobType} onChange={(e) => setJobType(e.target.value)}>
        <option value="">All Job Types</option>
        <option value="Full Time">Full Time</option>
        <option value="Part Time">Part Time</option>
        <option value="Internship">Internship</option>
      </select>

      {/* Sort */}
      <select value={sort} onChange={(e) => setSort(e.target.value)}>
        <option value="">Sort By</option>
        <option value="low">Salary: Low to High</option>
        <option value="high">Salary: High to Low</option>
        <option value="name">Job Name</option>
      </select>

      <button onClick={clearFilters}>Clear Filters</button>
    </div>
  );
}

export default JobFilter;
