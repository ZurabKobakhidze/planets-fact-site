import React, { useState } from "react";
import { useParams } from "react-router-dom";
import data from "./data.json";
import sourceIcon from "./assets/icon-source.svg";
import "./PlanetDetails.css";

const PlanetDetails = () => {
  const { planetName } = useParams();
  const selectedPlanet =
    data.find((planet) => planet.name.toLowerCase() === planetName) || {};

  const {
    name = "",
    color = "",
    overview: {
      content: overviewContent = "",
      source: overviewSource = "",
    } = {},
    structure: {
      content: structureContent = "",
      source: structureSource = "",
    } = {},
    geology: { content: geologyContent = "", source: geologySource = "" } = {},
    rotation = "",
    revolution = "",
    radius = "",
    temperature = "",
    images: {
      planet: planetImage = "",
      internal: internalImage = "",
      geology: geologyImage = "",
    } = {},
  } = selectedPlanet;

  const [activeSection, setActiveSection] = useState("overview");

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  const sectionData = {
    overview: {
      content: overviewContent,
      source: overviewSource,
    },
    structure: {
      content: structureContent,
      source: structureSource,
    },
    surface: {
      content: geologyContent,
      source: geologySource,
    },
  };

  const { content: sectionContent, source: sectionSource } =
    sectionData[activeSection] || sectionData["overview"];

  const getShortenedSource = (fullSource) => {
    const domain = getDomainFromUrl(fullSource);
    return domain.charAt(0).toUpperCase() + domain.slice(1);
  };

  const getDomainFromUrl = (url) => {
    const match = url.match(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n]+)/im);
    return match && match[1];
  };

  return (
    <>
      <div>
        <div className="info_planets_div">
          <div className="info_box_h2">
            <button
              className={`h2_info ${
                activeSection === "overview" ? "active" : ""
              }`}
              onClick={() => handleSectionClick("overview")}
            >
              OVERVIEW
            </button>
            {activeSection === "overview" && (
              <div
                className="underline_color_box"
                style={{ backgroundColor: color }}
              ></div>
            )}
          </div>

          <div className="info_box_h2">
            <button
              className={`h2_info ${
                activeSection === "structure" ? "active" : ""
              }`}
              onClick={() => handleSectionClick("structure")}
            >
              Structure
            </button>
            {activeSection === "structure" && (
              <div
                className="underline_color_box"
                style={{ backgroundColor: color }}
              ></div>
            )}
          </div>

          <div className="info_box_h2">
            <button
              className={`h2_info ${
                activeSection === "surface" ? "active" : ""
              }`}
              onClick={() => handleSectionClick("surface")}
            >
              Surface
            </button>
            {activeSection === "surface" && (
              <div
                className="underline_color_box"
                style={{ backgroundColor: color }}
              ></div>
            )}
          </div>
        </div>
        <div className="underline"></div>
      </div>
      <div className="container_1">
        <div className="planets_div">
          {activeSection === "overview" && (
            <img className="planet_svg" src={planetImage} alt={name} />
          )}
          {activeSection === "structure" && (
            <img className="planet_svg" src={internalImage} alt={name} />
          )}
          {activeSection === "surface" && (
            <>
              <img
                className="planet_svg surface_planet"
                src={planetImage}
                alt={name}
              />
              <img
                className="planet_svg surface_geology"
                src={geologyImage}
                alt={name}
              />
            </>
          )}
        </div>
        <h1 className="planet_name">{name}</h1>
        <p className="planet_paragraph">{sectionContent}</p>
        <div className="source_div">
          <h2 className="h2_source">
            Source:{" "}
            <a href={sectionSource} target="_blank" rel="noopener noreferrer" className="wiki_text">
              {getShortenedSource(sectionSource)}
            </a>
          </h2>
          <img src={sourceIcon} alt="sourceIcon" />
        </div>
      </div>
      <div className="container_2">
        <div className="container_2_info_box">
          <h2 className="rotation">ROTATION TIME</h2>
          <h2 className="numbers_info">{rotation}</h2>
        </div>
        <div className="container_2_info_box">
          <h2 className="rotation">REVOLUTION TIME</h2>
          <h2 className="numbers_info">{revolution}</h2>
        </div>
        <div className="container_2_info_box">
          <h2 className="rotation">RADIUS</h2>
          <h2 className="numbers_info">{radius}</h2>
        </div>
        <div className="container_2_info_box">
          <h2 className="rotation">AVERAGE TEMP.</h2>
          <h2 className="numbers_info">{temperature}</h2>
        </div>
      </div>
    </>
  );
};

export default PlanetDetails;