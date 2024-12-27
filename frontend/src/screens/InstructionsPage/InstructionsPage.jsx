import React from "react";
import "./InstructionsPage.css";

const InstructionsPage = () => {
  return (
    <div className="instructions-page">
      <h1>Instruções</h1>
      <ul>
        <li>1. O objetivo é chegar ao nível 10 antes dos outros jogadores.</li>
        <li>2. Mate monstros para ganhar níveis e tesouros.</li>
        <li>3. Use cartas de trapaça para atrapalhar seus adversários.</li>
        <li>4. Trabalhe com aliados ou atrapalhe-os quando for conveniente!</li>
      </ul>
    </div>
  );
};

export default InstructionsPage;
