import "./App.css";
import Header from "./components/Header";
import React from "react";
import AboutPage from "./components/AboutPage";

import Charts from "./components/Charts";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />

      <div>
        <Routes>
          <Route path="/about" element={<AboutPage />} />
          <Route path="/" element={<Charts />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
