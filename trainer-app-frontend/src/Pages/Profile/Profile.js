import React, { useState } from "react";
import "./Profile.css";

function Profile() {
  const [activeTab, setActiveTab] = useState("edit-profile");

  const renderContent = () => {
    switch (activeTab) {
      case "edit-profile":
        return <div>Edit Profile Content</div>;
      case "privacy-settings":
        return <div>Privacy Settings Content</div>;
      case "logout":
        return <div>Logout Content</div>;
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
      <div className="profile-content">{renderContent()}</div>
    </div>
  );
}

export default Profile;
