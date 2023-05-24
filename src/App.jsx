import React, { useState } from "react";
import "./App.css";
import PlanetDetails from "./PlanetDetails";
import { Routes, Route, Link } from "react-router-dom";
import Hamburger from "./assets/icon-hamburger.svg";
import arrow from "./assets/icon-chevron.svg";

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
        <div className="planet_mobile_divs">
          <Link to="/planet/mercury" className="menu_names" onClick={closeMenu}>
            <div className="mobile_menu_design">
              <div
                className="menu_circle"
                style={{ backgroundColor: "#DEF4FC" }}
              ></div>
              <span>mercury</span>
            </div>
            <img src={arrow} alt="" />
          </Link>
        </div>
        <div className="underline_mobile_menu"></div>
        <div className="planet_mobile_divs">
          <Link to="/planet/venus" className="menu_names" onClick={closeMenu}>
            <div className="mobile_menu_design">
              <div
                className="menu_circle"
                style={{ backgroundColor: "#F7CC7F" }}
              ></div>
              <span>venus</span>
            </div>
            <img src={arrow} alt="" />
          </Link>
        </div>
        <div className="underline_mobile_menu"></div>
        <div className="planet_mobile_divs">
          <Link to="/planet/earth" className="menu_names" onClick={closeMenu}>
            <div className="mobile_menu_design">
              <div
                className="menu_circle"
                style={{ backgroundColor: "#545BFE" }}
              ></div>
              <span>earth</span>
            </div>
            <img src={arrow} alt="" />
          </Link>
        </div>
        <div className="underline_mobile_menu"></div>
        <div className="planet_mobile_divs">
          <Link to="/planet/mars" className="menu_names" onClick={closeMenu}>
            <div className="mobile_menu_design">
              <div
                className="menu_circle"
                style={{ backgroundColor: "#FF6A45" }}
              ></div>
              <span>mars</span>
            </div>
            <img src={arrow} alt="" />
          </Link>
        </div>
        <div className="underline_mobile_menu"></div>
        <div className="planet_mobile_divs">
          <Link to="/planet/saturn" className="menu_names" onClick={closeMenu}>
            <div className="mobile_menu_design">
              <div
                className="menu_circle"
                style={{ backgroundColor: "#FCCB6B" }}
              ></div>
              <span>saturn</span>
            </div>
            <img src={arrow} alt="" />
          </Link>
        </div>
        <div className="underline_mobile_menu"></div>
        <div className="planet_mobile_divs">
          <Link to="/planet/jupiter" className="menu_names" onClick={closeMenu}>
            <div className="mobile_menu_design">
              <div
                className="menu_circle"
                style={{ backgroundColor: "#ECAD7A" }}
              ></div>
              <span>jupiter</span>
            </div>
            <img src={arrow} alt="" />
          </Link>
        </div>
        <div className="underline_mobile_menu"></div>
        <div className="planet_mobile_divs">
          <Link to="/planet/uranus" className="menu_names" onClick={closeMenu}>
            <div className="mobile_menu_design">
              <div
                className="menu_circle"
                style={{ backgroundColor: "#65F0D5" }}
              ></div>
              <span>uranus</span>
            </div>
            <img src={arrow} alt="" />
          </Link>
        </div>
        <div className="underline_mobile_menu"></div>
        <div className="planet_mobile_divs">
          <Link to="/planet/neptune" className="menu_names" onClick={closeMenu}>
            <div className="mobile_menu_design">
              <div
                className="menu_circle"
                style={{ backgroundColor: "#497EFA" }}
              ></div>
              <span>neptune</span>
            </div>
            <img src={arrow} alt="" />
          </Link>
        </div>
      </div>
      <div className="desktop_menu">
        <Link to="/planet/mercury" className="desktop_menu">
          mercury
        </Link>
        <Link to="/planet/venus" className="desktop_menu">
          venus
        </Link>
        <Link to="/planet/earth" className="desktop_menu">
          earth
        </Link>
        <Link to="/planet/mars" className="desktop_menu">
          mars
        </Link>
        <Link to="/planet/jupiter" className="desktop_menu">
          jupiter
        </Link>
        <Link to="/planet/saturn" className="desktop_menu">
          saturn
        </Link>
        <Link to="/planet/uranus" className="desktop_menu">
          uranus
        </Link>
        <Link to="/planet/neptune" className="desktop_menu">
          neptune
        </Link>
      </div>
      <Routes>
        <Route path="/planet/:planetName" element={<PlanetDetails />} />
      </Routes>
    </div>
  );
}

export default App;
