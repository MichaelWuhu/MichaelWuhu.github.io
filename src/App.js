import React from "react";
import "./index.css";
import "./styles/ColorPalette.css";

import Home from "./routes/Home";
import Experience from "./routes/Experience";
import About from "./routes/About";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Experience" element={<Experience />} />
          {/* <Route path="/About" element={<About />} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
