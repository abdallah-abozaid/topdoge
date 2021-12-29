import React from "react";
import FirstTopDoge from "../components/home/firsttopdoge/FirstTopDoge";
import HowItWork from "../components/home/howItWork/HowItWork";
import OurFrinds from "./../components/home/ourFrinds/OurFrinds";
import RoudMap from "./../components/home/roadMap/RoudMap";

const Home = () => {
  return (
    <div>
      <HowItWork />
      <FirstTopDoge />
      <OurFrinds />
      <RoudMap />
    </div>
  );
};

export default Home;
