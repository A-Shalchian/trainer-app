import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} /> {/* Home page */}
          <Route path="/login" element={<Login />} /> {/* Login page */}
          <Route path="/signup" element={<Signup />} /> {/* Signup route */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
