import React, { useState } from "react";
import "./App.css";
import PlanetDetails from "./PlanetDetails";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import Hamburger from "./assets/icon-hamburger.svg";
import arrow from "./assets/icon-chevron.svg";
import data from "./data.json";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <header className="header">
        <h1 className="h1_planets">THE PLANETS</h1>
        <div className="menu_div" onClick={toggleMenu}>
          <img
            src={Hamburger}
            alt="Hamburger"
            style={{ opacity: isOpen ? 0.25 : 1 }}
          />
        </div>
      </header>
      <div className="underline_app"></div>
      <div className={`menu_planets ${isOpen ? "open" : ""}`}>
        {data.map((planet, index) => (
          <React.Fragment key={index}>
            <div className="planet_mobile_divs">
              <Link
                to={`/planet/${planet.name.toLowerCase()}`}
                className="menu_names"
                onClick={closeMenu}
              >
                <div className="mobile_menu_design">
                  <div
                    className="menu_circle"
                    style={{ backgroundColor: planet.color }}
                  ></div>
                  <span>{planet.name}</span>
                </div>
                <img src={arrow} alt="" />
              </Link>
            </div>
            <div className="underline_mobile_menu"></div>
          </React.Fragment>
        ))}
      </div>
      <div className="header_desktop_div">
        <h1 className="h1_planets_desktop">THE PLANETS</h1>
        <div className="desktop_menu_div">
          {data.map((planet, index) => (
            <div
              className="planet_hover_box"
              key={index}
              data-color={planet.color}
              onMouseEnter={(e) => {
                const hoverElement =
                  e.currentTarget.querySelector(".palent_hover");
                hoverElement.style.background = e.currentTarget.dataset.color;
                hoverElement.style.display = "block";
              }}
              onMouseLeave={(e) => {
                const hoverElement =
                  e.currentTarget.querySelector(".palent_hover");
                hoverElement.style.display = "none";
              }}
            >
              <Link
                to={`/planet/${planet.name.toLowerCase()}`}
                className="desktop_menu"
              >
                {planet.name}
              </Link>
              <div className="palent_hover" style={{ display: "none" }}></div>
            </div>
          ))}
        </div>
      </div>
      <div className="underline_app_desktop"></div>
      <Routes>
        <Route path="/" element={<Navigate to="/planet/earth" />}></Route>
        <Route path="/planet/:planetName" element={<PlanetDetails />} />
      </Routes>
    </div>
  );
}

export default App;
