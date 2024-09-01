import React, { useState, useEffect } from "react";
import "./Profile.css";
import { logout, updateProfile } from "../../Services/Api"; // Import the logout and updateProfile functions
import { useNavigate } from "react-router-dom";

function Profile() {
  const [activeTab, setActiveTab] = useState("edit-profile");
  const [name, setName] = useState(""); // State for editing name
  const [age, setAge] = useState(""); // State for editing age
  const [message, setMessage] = useState(""); // State for displaying messages
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is logged in
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login"); // Redirect to login if not logged in
    }
  }, [navigate]);

  const handleLogout = async () => {
    try {
      const token = localStorage.getItem("token");
      await logout(token); // Call the logout API
      localStorage.removeItem("token"); // Clear the token from local storage
      setMessage("Logged out successfully.");
      setTimeout(() => navigate("/login"), 2000); // Redirect to login page after 2 seconds
    } catch (error) {
      setMessage("Failed to log out. Please try again.");
    }
  };

  const handleEditProfileSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      await updateProfile(token, { name, age }); // Call the updateProfile API
      setMessage("Profile updated successfully.");
    } catch (error) {
      setMessage("Failed to update profile. Please try again.");
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case "edit-profile":
        return (
          <div className="edit-profile-content">
            <h3>Edit Profile</h3>
            <form
              onSubmit={handleEditProfileSubmit}
              className="edit-profile-form"
            >
              <div className="input-group">
                <label>Name:</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Set a new name."
                />
              </div>
              <div className="input-group">
                <label>Age:</label>
                <input
                  type="number"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  placeholder="Enter your age"
                />
              </div>
              <button type="submit" className="save-button">
                Save Changes
              </button>
            </form>
          </div>
        );
      case "privacy-settings":
        return <div>Privacy Settings Content</div>;
      case "logout":
        return (
          <div className="logout-content">
            <h3>Are you sure you want to log out?</h3>
            <button className="logout-button" onClick={handleLogout}>
              Logout
            </button>
          </div>
        );
      default:
        return <div>Edit Profile Content</div>;
    }
  };

  return (
    <div className="profile-container">
      <div className="profile-sidebar">
        <ul>
          <li
            className={activeTab === "edit-profile" ? "active" : ""}
            onClick={() => setActiveTab("edit-profile")}
          >
            Edit Profile
          </li>
          <li
            className={activeTab === "privacy-settings" ? "active" : ""}
            onClick={() => setActiveTab("privacy-settings")}
          >
            Privacy Settings
          </li>
          <li
            className={activeTab === "logout" ? "active" : ""}
            onClick={() => setActiveTab("logout")}
          >
            Logout
          </li>
        </ul>
      </div>
      <div className="profile-content">
        {renderContent()}
        {message && <div className="message">{message}</div>}
      </div>
    </div>
  );
}

export default Profile;
