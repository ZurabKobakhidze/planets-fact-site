import React, { useState } from "react";
import { useParams } from "react-router-dom";
import data from "./data.json";
import sourceIcon from "./assets/icon-source.svg";
import "./PlanetDetails.css";
import { motion } from "framer-motion";
import planetEarth2 from "/planet-earth-2.svg";


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

    const motionVariants1 = {
      animate: {
        x: ["100%", "-100%"],
        transition: {
          x: {
            repeat: Infinity,
            duration: 20, // change the duration as you need
            ease: "linear",
            delay: 0,
          },
        },
      },
    };
    
    const motionVariants2 = {
      initial: { x: "100%" },
      animate: {
        x: ["100%", "-100%"],
        transition: {
          x: {
            repeat: Infinity,
            duration: 20, // change the duration as you need
            ease: "linear",
            delay: 10,
          },
        },
      },
    };

  return (
    <>
      <div>
        <div className="info_planets_div ">
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
        <div className="mini_container1_1">
          <div className="planets_div">
            {activeSection === "overview" && (
              <div className="motion_planet_div">
              <motion.img
                className="planet_svg"
                src={planetImage}
                alt={name}
              />
          
              <motion.img
                className="planet_svg_2"
                src={planetEarth2}
                alt={name}
                variants={motionVariants1}
                initial="initial"
                animate="animate"
              />
          
              <motion.img
                className="planet_svg_2"
                src={planetEarth2}
                alt={name}
                variants={motionVariants2}
                initial="initial"
                animate="animate"
              />
            </div>
            )}
            {activeSection === "structure" && (
              <motion.img
                className="planet_svg"
                src={internalImage}
                alt={name}
                variants={variants}
                initial="initial"
                animate="animate"
                exit="exit"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              />
            )}
            {activeSection === "surface" && (
              <>
                <motion.img
                  className="planet_svg surface_planet"
                  src={planetImage}
                  alt={name}
                  variants={variants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                />
                <motion.img
                  className="planet_svg surface_geology"
                  src={geologyImage}
                  alt={name}
                  variants={variants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                />
              </>
            )}
          </div>
        </div>
        <div className="grid_container">
          <div className="info_planets_div_desktop ">
            <div
              className={`info_box_h2 ${
                activeSection === "overview" ? "active" : ""
              }`}
              style={{
                backgroundColor:
                  activeSection === "overview" ? color : "transparent",
              }}
            >
              <span className="number_grid_div">01</span>
              <button
                className={`h2_info ${
                  activeSection === "overview" ? "active" : ""
                }`}
                onClick={() => handleSectionClick("overview")}
              >
                OVERVIEW
              </button>
            </div>
            <div
              className={`info_box_h2 ${
                activeSection === "structure" ? "active" : ""
              }`}
              style={{
                backgroundColor:
                  activeSection === "structure" ? color : "transparent",
              }}
            >
              <span className="number_grid_div">02</span>
              <button
                className={`h2_info ${
                  activeSection === "structure" ? "active" : ""
                }`}
                onClick={() => handleSectionClick("structure")}
              >
                Structure
              </button>
            </div>
            <div
              className={`info_box_h2 ${
                activeSection === "surface" ? "active" : ""
              }`}
              style={{
                backgroundColor:
                  activeSection === "surface" ? color : "transparent",
              }}
            >
              <span className="number_grid_div">03</span>
              <button
                className={`h2_info ${
                  activeSection === "surface" ? "active" : ""
                }`}
                onClick={() => handleSectionClick("surface")}
              >
                Surface
              </button>
            </div>
          </div>
          <div className="mini_container1_2">
            <h1 className="planet_name">{name}</h1>
            <p className="planet_paragraph">{sectionContent}</p>
            <div className="source_div">
              <h2 className="h2_source">
                Source:{" "}
                <a
                  href={sectionSource}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="wiki_text"
                >
                  Wikipedia
                </a>
              </h2>
              <img src={sourceIcon} alt="sourceIcon" />
            </div>
          </div>
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
