import axios from "axios";

const API_URL = "http://localhost:5000"; // Base URL of your backend

// Register a new user
export const signup = async (name, email, password) => {
  try {
    const response = await axios.post(
      `${API_URL}/users` || "http://localhost:5000/users",
      {
        name,
        email,
        password,
      }
    );
    console.log("Signup successful:", response.data); // Debugging line
    return response.data; // This will return the user object and the token
  } catch (error) {
    console.error("Error registering user:", error); // Log the entire error
    if (error.response && error.response.data) {
      console.error("Backend response error:", error.response.data); // Log the backend error response
      throw new Error(error.response.data.error || "Signup failed!");
    } else if (error.request) {
      console.error("No response received:", error.request); // Log if no response was received
      throw new Error("No response from server. Please check your backend.");
    } else {
      console.error("Error setting up request:", error.message); // Log any other errors
      throw new Error("An error occurred during signup!");
    }
  }
};

// Login a user
export const login = async (email, password) => {
  try {
    const response = await axios.post(
      `${API_URL}/users/login` || "http://localhost:5000/users/login",
      {
        email,
        password,
      }
    );
    console.log("Login successful:", response.data); // Debugging line
    return response.data; // This will return the user object and the token
  } catch (error) {
    console.error("Error logging in:", error); // Log the entire error
    if (error.response && error.response.data) {
      console.error("Backend response error:", error.response.data); // Log the backend error response
      throw new Error(error.response.data.error || "Login failed!");
    } else if (error.request) {
      console.error("No response received:", error.request); // Log if no response was received
      throw new Error("No response from server. Please check your backend.");
    } else {
      console.error("Error setting up request:", error.message); // Log any other errors
      throw new Error("An error occurred during login!");
    }
  }
};
