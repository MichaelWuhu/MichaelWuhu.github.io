import "../styles/Home.css";

import TitleArea from "../components/TitleArea";
import BodyArea from "../components/BodyArea";
import Footer from "../components/Footer";


import React from "react";

const Home = () => {
  return (
    <div className="Home">
      <TitleArea title="Hi. I'm Michael" />
      <BodyArea />
    </div>
  );
};

export default Home;
