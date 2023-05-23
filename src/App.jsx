import "./App.css";
import PlanetDetails from "./PlanetDetails";
import { Routes, Route, useNavigate } from "react-router-dom";
import Hamburger from "./assets/icon-hamburger.svg";

function App() {
  const navigate = useNavigate();

  const handlePlanetClick = (planetName) => {
    navigate(`/PlanetDetails/${planetName}`);
  };

  return (
    <div>
      <header className="header">
        <h1 className="h1_planets">THE PLANETS</h1>
        <div className="menu_div">
          <img src={Hamburger} alt="Hamburger" />
        </div>
        <div className="menu_planets">
          <button className="menu_names" onClick={() => handlePlanetClick("mercury")}>
            mercury
          </button>
          <button className="menu_names" onClick={() => handlePlanetClick("venus")}>
            venus
          </button>
          <button className="menu_names" onClick={() => handlePlanetClick("earth")}>
            earth
          </button>
          <button className="menu_names" onClick={() => handlePlanetClick("mars")}>
            mars
          </button>
          <button className="menu_names" onClick={() => handlePlanetClick("jupiter")}>
            jupiter
          </button>
          <button className="menu_names" onClick={() => handlePlanetClick("saturn")}>
            saturn
          </button>
          <button className="menu_names" onClick={() => handlePlanetClick("uranus")}>
            uranus
          </button>
          <button className="menu_names" onClick={() => handlePlanetClick("neptune")}>
            neptune
          </button>
        </div>
      </header>
      <Routes>
        <Route path="/" element={<PlanetDetails />} />
        <Route path="/PlanetDetails/:planetName" element={<PlanetDetails />} />
      </Routes>
    </div>
  );
}

export default App;
