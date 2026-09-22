import React, { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

import jobs from "../data/jobs.json";

function ApplyJob() {
  const { id } = useParams();
  const navigate = useNavigate();

  const job = jobs.find((job) => job.id === parseInt(id));

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    education: "",
    skills: "",
    experience: "",
    coverLetter: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

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

  // Handle input
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Validation
  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9]{10}$/.test(formData.phone)) {
      newErrors.phone = "Enter a valid 10-digit phone number";
    }

    if (!formData.education.trim()) {
      newErrors.education = "Education is required";
    }

    if (!formData.skills.trim()) {
      newErrors.skills = "Skills are required";
    }

    if (!formData.experience.trim()) {
      newErrors.experience = "Experience is required";
    }

    if (!formData.coverLetter.trim()) {
      newErrors.coverLetter = "Cover letter is required";
    }

    return newErrors;
  };

  // Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const existingApplications =
      JSON.parse(localStorage.getItem("applications")) || [];

    const newApplication = {
      id: Date.now(),
      jobId: job.id,
      jobTitle: job.title,
      company: job.company,
      appliedDate: new Date().toLocaleDateString(),
      status: "Applied",
      ...formData,
    };

    localStorage.setItem(
      "applications",
      JSON.stringify([...existingApplications, newApplication]),
    );

    setErrors({});
    setSuccess(true);
  };

  if (success) {
    return (
      <div className="success-message">
        <h1>Application Submitted! 🎉</h1>

        <p>
          Your application for <strong>{job.title}</strong> has been submitted
          successfully.
        </p>

        <button onClick={() => navigate("/applications")}>
          View My Applications
        </button>

        <Link to="/jobs">
          <button>Browse More Jobs</button>
        </Link>
      </div>
    );
  }

  return (
    <div className="apply-page">
      <h1>Apply for Job</h1>

      <div className="apply-job-info">
        <h2>{job.title}</h2>
        <p>{job.company}</p>
        <p>📍 {job.location}</p>
      </div>

      <form onSubmit={handleSubmit}>
        {/* Name */}
        <div className="form-group">
          <label>Full Name</label>

          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your full name"
          />

          {errors.name && <p className="error">{errors.name}</p>}
        </div>

        {/* Email */}
        <div className="form-group">
          <label>Email</label>

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />

          {errors.email && <p className="error">{errors.email}</p>}
        </div>

        {/* Phone */}
        <div className="form-group">
          <label>Phone</label>

          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter 10-digit phone number"
          />

          {errors.phone && <p className="error">{errors.phone}</p>}
        </div>

        {/* Education */}
        <div className="form-group">
          <label>Education</label>

          <input
            type="text"
            name="education"
            value={formData.education}
            onChange={handleChange}
            placeholder="Example: B.Tech"
          />

          {errors.education && <p className="error">{errors.education}</p>}
        </div>

        {/* Skills */}
        <div className="form-group">
          <label>Skills</label>

          <input
            type="text"
            name="skills"
            value={formData.skills}
            onChange={handleChange}
            placeholder="Python, Django, React, MySQL"
          />

          {errors.skills && <p className="error">{errors.skills}</p>}
        </div>

        {/* Experience */}
        <div className="form-group">
          <label>Experience</label>

          <select
            name="experience"
            value={formData.experience}
            onChange={handleChange}
          >
            <option value="">Select Experience</option>

            <option value="Fresher">Fresher</option>

            <option value="0-1 Years">0-1 Years</option>

            <option value="1-2 Years">1-2 Years</option>

            <option value="2+ Years">2+ Years</option>
          </select>

          {errors.experience && <p className="error">{errors.experience}</p>}
        </div>

        {/* Cover Letter */}
        <div className="form-group">
          <label>Cover Letter</label>

          <textarea
            name="coverLetter"
            value={formData.coverLetter}
            onChange={handleChange}
            placeholder="Write your cover letter..."
            rows="6"
          />

          {errors.coverLetter && <p className="error">{errors.coverLetter}</p>}
        </div>

        <button type="submit">Submit Application</button>
      </form>
    </div>
  );
}

export default ApplyJob;
