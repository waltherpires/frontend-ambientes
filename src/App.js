import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import QuemSomos from "./pages/QuemSomos";
import Carros from "./pages/Carros";

import "./App.css";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="quemsomos" element={<QuemSomos />} />
        <Route path="carros" element={<Carros />} />
      </Routes>
    </Router>
  );
}

export default App;
