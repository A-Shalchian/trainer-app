import axios from "axios";

const API_URL = "http://localhost:5000"; // Base URL of your backend

// Register a new user
export const signup = async (name, email, password) => {
  try {
    const response = await axios.post(`${API_URL}/users`, {
      name,
      email,
      password,
    });
    return response.data;
  } catch (error) {
    handleError(error, "Signup failed!");
  }
};

// Login a user
export const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/users/login`, {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    handleError(error, "Login failed!");
  }
};

// Logout from the current session
export const logout = async (token) => {
  try {
    await axios.post(
      `${API_URL}/users/logout`,
      {},
      { headers: { Authorization: `Bearer ${token}` } }
    );
  } catch (error) {
    handleError(error, "Logout failed!");
  }
};

// Logout from all sessions
export const logoutAll = async (token) => {
  try {
    await axios.post(
      `${API_URL}/users/logoutAll`,
      {},
      { headers: { Authorization: `Bearer ${token}` } }
    );
  } catch (error) {
    handleError(error, "Logout from all sessions failed!");
  }
};

// Get the logged-in user's profile
export const getProfile = async (token) => {
  try {
    const response = await axios.get(`${API_URL}/users/me`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    handleError(error, "Failed to fetch profile!");
  }
};

// Update the logged-in user's profile
export const updateProfile = async (token, updates) => {
  try {
    const response = await axios.patch(`${API_URL}/users/me`, updates, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    handleError(error, "Failed to update profile!");
  }
};

// Delete the logged-in user's profile
export const deleteProfile = async (token) => {
  try {
    await axios.delete(`${API_URL}/users/me`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  } catch (error) {
    handleError(error, "Failed to delete profile!");
  }
};

// Generic error handler function
const handleError = (error, defaultMessage) => {
  if (error.response && error.response.data && error.response.data.error) {
    throw new Error(error.response.data.error);
  } else {
    throw new Error(defaultMessage);
  }
};
