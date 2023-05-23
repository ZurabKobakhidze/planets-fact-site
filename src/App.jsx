import "./App.css";
import Planets from "./planets"; // Update import statement
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
      <Routes>
        <Route path="/" element={<Navigate to="/planets" />} />
        <Route path="/planets" element={<Planets />} /> {/* Update component name */}
      </Routes>
    </div>
  );
}

export default App;