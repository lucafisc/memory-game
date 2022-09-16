import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Gameboard from "./components/Gameboard";
import Footer from "./components/Footer";
import { levelData } from "./components/levelData";
import "./styles/App.css";
import "./styles/Animations.css";
function App() {
  const [level, setLevel] = useState(0);
  const [score, setScore] = useState(0);
  const { backgroundColor, hoverColor, speed, icons } = levelData[level];

  useEffect(() => {
    changeStyles(backgroundColor, hoverColor, speed);
  }, [level]);

  function addPoint() {
    setScore((prevScore) => prevScore + 1);
    setLevel((prevLevel) => (prevLevel === 8 ? 0 : prevLevel + 1));
  }

  function levelUp() {
    setLevel((prevLevel) => (prevLevel === 8 ? 0 : prevLevel + 1));
  }

  return (
    <>
      <div className="App">
        <Header score={score} />
        <Gameboard icons={icons} />
        <Footer level={level + 1} />
        <button onClick={addPoint}>+</button>
      </div>
    </>
  );
}

function changeStyles(background, hover, speed) {
  document.documentElement.style.setProperty("--background", background);
  document.documentElement.style.setProperty("--hover", hover);
  document.documentElement.style.setProperty("--speed", speed);
}

export default App;
