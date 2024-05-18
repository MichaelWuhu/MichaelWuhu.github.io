import React from "react";
import "./styles/App.css";

// import Temp from "./routes/Temp";
import Home from "./routes/Home";
// import Experience from "./routes/Experience";
import About from "./routes/About";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div id="page-container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/" element={<Temp />} /> */}
        {/* <Route path="/Experience" element={<Experience />} /> */}
        <Route path="/About" element={<About />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
