import "../styles/Home.css";

import TitleArea from "../components/TitleArea";
import BodyArea from "../components/BodyArea";
import Footer from "../components/Footer";

import profile_picture from "../images/profile picture.png";

import React from "react";

const Home = () => {
  return (
    <div className="Home">
      <TitleArea title={"Hi. I'm"} subtitle={"Michael."} profile_picture={profile_picture}/>
      <BodyArea />
      <Footer />
    </div>
  );
};

export default Home;
