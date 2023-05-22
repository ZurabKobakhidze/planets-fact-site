import "./App.css";
import planets from "./planets";
import { Routes, Route, Navigate} from "react-router-dom";

function App() {
  
  return <div>
    <Routes>
      <Route path="/" element={<Navigate to="/planets"/>}/>
      <Route path="/planets" element={<planets/>}/>
    </Routes>

  </div>;
}

export default App;
