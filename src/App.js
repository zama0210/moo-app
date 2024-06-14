import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import HomePage from "./Pages/HomePage";
import Styleguide from "./Components/Styleguide";
import Wireframes from "./Components/Wireframes";
import Essay from "./Components/Essay";
import InternetArt from "./Components/InternetArt";
import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Styleguide" element={<Styleguide />} />
        <Route path="/Wireframes" element={<Wireframes />} />
        <Route path="/Essay" element={<Essay />} />
        <Route path="/InternetArt" element={<InternetArt />} />
      </Routes>
    </Router>
  );
}

export default App;
