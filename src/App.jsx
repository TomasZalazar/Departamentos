import Nav from "./components/NavBar/NavBar";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CentralAv from "./components/CentralAv/CentralAv";
import Inicio from "./components/Inicio/Inicio";
import SanNicolas from "./components/SanNicolas/SanNicolas";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/CentralAv" element={<CentralAv />} />
        <Route path="/SanNicolas" element={<SanNicolas />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
