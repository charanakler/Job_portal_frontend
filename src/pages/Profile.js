import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

function Profile() {
  const { user, updateUser } = useContext(AuthContext);

  const [isEditing, setIsEditing] = useState(false);

  const [formData, setFormData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    phone: user?.phone || "",
  });

  if (!user) {
    return <h2>Please login to view your profile.</h2>;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSave = () => {
    const updatedUser = {
      ...user,
      ...formData,
    };

    updateUser(updatedUser);

    setIsEditing(false);
  };

  return (
    <div className="profile-page">
      <div className="profile-card">
        <h1>My Profile</h1>

        {isEditing ? (
          <>
            <div className="form-group">
              <label>Name</label>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Email</label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Phone</label>

              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <button onClick={handleSave}>Save Changes</button>

            <button onClick={() => setIsEditing(false)}>Cancel</button>
          </>
        ) : (
          <>
            <div className="profile-info">
              <div>
                <strong>Name</strong>
                <p>{user.name}</p>
              </div>

              <div>
                <strong>Email</strong>
                <p>{user.email}</p>
              </div>

              <div>
                <strong>Phone</strong>
                <p>{user.phone}</p>
              </div>
            </div>

            <button onClick={() => setIsEditing(true)}>Edit Profile</button>
          </>
        )}
      </div>
    </div>
  );
}

export default Profile;
