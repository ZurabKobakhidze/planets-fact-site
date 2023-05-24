import "./App.css";
import PlanetDetails from "./PlanetDetails";
import { Routes, Route, useNavigate, Link } from "react-router-dom";
import Hamburger from "./assets/icon-hamburger.svg";

function App() {
  const navigate = useNavigate();

  const handlePlanetClick = (planetName) => {
    navigate(`/planet/${planetName}`);
  };

  return (
    <div>
      <header className="header">
        <h1 className="h1_planets">THE PLANETS</h1>
        <div className="menu_div">
          <img src={Hamburger} alt="Hamburger" />
        </div>
        <div className="menu_planets">
          <Link to="/planet/mercury" className="menu_names">mercury</Link>
          <Link to="/planet/venus" className="menu_names">venus</Link>
          <Link to="/planet/earth" className="menu_names">earth</Link>
          <Link to="/planet/mars" className="menu_names">mars</Link>
          <Link to="/planet/jupiter" className="menu_names">jupiter</Link>
          <Link to="/planet/saturn" className="menu_names">saturn</Link>
          <Link to="/planet/uranus" className="menu_names">uranus</Link>
          <Link to="/planet/neptune" className="menu_names">neptune</Link>
        </div>
      </header>
      <Routes>
        <Route path="/planet/:planetName" element={<PlanetDetails />} />
      </Routes>
    </div>
  );
}

export default App;