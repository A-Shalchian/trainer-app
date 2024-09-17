import React from "react";
import "./Support.css";

const Support = () => {
  return (
    <div className="support-page">
      <div className="support-form">
        <h2>Support Form</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="issue">Issue</label>
            <select id="issue" name="issue" required>
              <option value="">Select an issue</option>
              <option value="technical">Technical Issue</option>
              <option value="billing">Billing Problem</option>
              <option value="general">General Inquiry</option>
              <option value="account">Account Issue</option>
            </select>
          </div>

          <div>
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              rows="5"
              required
            ></textarea>
          </div>

          <button type="submit" className="submit-button">
            Submit Ticket
          </button>
        </form>
      </div>
    </div>
  );
};

export default Support;
