import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./screens/HomePage/HomePage";
import GamePage from "./screens/GamePage/GamePage";
import InstructionsPage from "./screens/InstructionsPage/InstructionsPage";

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/game" element={<GamePage />} />
        <Route path="/instructions" element={<InstructionsPage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
