
import "./PlanetDetails.css";
import planetImg from "./assets/planet-earth.svg";
import sourceIcon from "./assets/icon-source.svg";
import React from "react";
import { useParams } from "react-router-dom";
import data from "./data.json";



const planets = () => {


  const { planetName } = useParams();

  // Find the selected planet from the data based on the planetName parameter
  const selectedPlanet = data.find((planet) => planet.name.toLowerCase() === planetName);
  
  return (
    <>
      <div>
        <div className="underline"></div>
        <div className="info_planets_div">
          <h2 className="h2_info">OVERVIEW</h2>
          <h2 className="h2_info">Structure</h2>
          <h2 className="h2_info">Surface </h2>
        </div>
        <div className="underline"></div>
      </div>
      <div className="container_1">
        <div className="planets_div">
          <img className="planet_svg" src={planetImg} alt="planetImg" />
        </div>
        <h1 className="planet_name">EARTH</h1>
        <p className="planet_paragraph">
          Third planet from the Sun and the only known planet to harbor life.
          About 29.2% of Earth's surface is land with remaining 70.8% is covered
          with water. Earth's distance from the Sun, physical properties and
          geological history have allowed life to evolve and thrive.
        </p>
        <div className="source_div">
          <h2 className="h2_source">
            Source: <span className="wiki_text">Wikipedia</span>
          </h2>
          <img src={sourceIcon} alt="sourceIcon" />
        </div>
        
      </div>
      <div className="container_2">
          <div className="container_2_info_box">
            <h2 className="rotation">ROTATION TIME</h2>
            <h2 className="numbers_info">243 days</h2>
          </div>
          <div className="container_2_info_box">
            <h2 className="rotation">REVOLUTION TIME</h2>
            <h2 className="numbers_info">224.7 days</h2>
          </div>
          <div className="container_2_info_box">
            <h2 className="rotation">radius</h2>
            <h2 className="numbers_info">6,051.8 km</h2>
          </div>
          <div className="container_2_info_box">
            <h2 className="rotation">AVERAGE TEMP.</h2>
            <h2 className="numbers_info">471°c</h2>
          </div>
        </div>
    </>
  );
};

export default planets;
