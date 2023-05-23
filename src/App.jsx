import "./App.css";
import planets from "./planets";
import { Routes, Route, Navigate } from "react-router-dom";
import Hamburger from "./assets/icon-hamburger.svg";

function App() {
  return (
    <div>
      <header className="header">
        <h1 className="h1_planets">THE PLANETS</h1>
        <div className="menu_div">
          <img src={Hamburger} alt="Hamburger" />
        </div>
      </header>
      <div className="underline"></div>
      <div className="info_planets_div">
        <h2 className="h2_info">OVERVIEW</h2>
        <h2 className="h2_info">Structure</h2>
        <h2 className="h2_info">Surface </h2>
      </div>
      <div className="underline"></div>

      <Routes>
        <Route path="/" element={<Navigate to="/planets" />} />
        <Route path="/planets" element={<planets />} />
      </Routes>
    </div>
  );
}

export default App;
