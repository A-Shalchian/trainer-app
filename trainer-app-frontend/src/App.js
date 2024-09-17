import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Pages/Home/Components/Navbar/Navbar";
import Footer from "./Pages/Home/Components/Footer/Footer";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";
import Profile from "./Pages/Profile/Profile";
import About from "./Pages/About/About";
import Programs from "./Pages/Programs/Programs";
import Contact from "./Pages/Contact/Contact";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} /> {/* Home page */}
          <Route path="/login" element={<Login />} /> {/* Login page */}
          <Route path="/signup" element={<Signup />} /> {/* Signup route */}
          <Route path="/profile" element={<Profile />} /> {/* Profile page */}
          <Route path="/about" element={<About />} /> {/* About page */}
          <Route path="/programs" element={<Programs />} />
          {/* Programs page */}
          <Route path="/contact" element={<Contact />} /> {/* Contact page */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
