import React from "react";
import "./LevelBar.css";

const LevelBar = ({ level, maxLevel }) => {
  const progress = (level / maxLevel) * 100;

  return (
    <div className="progress-bar">
      <div className="progress" style={{ width: `${progress}%` }}></div>
    </div>
  );
};

export default LevelBar;
