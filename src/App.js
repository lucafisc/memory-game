import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Gameboard from "./components/Gameboard";
import Footer from "./components/Footer";
import GameOver from "./components/GameOver";
import { levelData } from "./components/levelData";
import "./styles/App.css";
import "./styles/Animations.css";
function App() {
  const [level, setLevel] = useState(0);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(
    JSON.parse(localStorage.getItem("high-score")) || 0
  );
  const [lastScore, setLastScore] = useState(0);
  const [selected, setSelected] = useState([]);
  const [gameOver, setGameOver] = useState(false);

  const { backgroundColor, hoverColor, speed, icons } = levelData[level];

  useEffect(() => {
    changeStyles(backgroundColor, hoverColor, speed);
  }, [level]);

  function addPoint() {
    setScore((prevScore) => prevScore + 1);
  }

  function levelUp() {
    setLevel((prevLevel) => (prevLevel === 8 ? 0 : prevLevel + 1));
  }

  function checkMove(selection) {
    const wasAlreadyClicked = selected.some((icon) => icon === selection);
    if (wasAlreadyClicked) {
      setGameOver(true);
      checkHighScore();
      setLastScore(score);
      setScore(0);
    } else {
      addPoint();
      setSelected((prevArray) => [...prevArray, selection]);
    }
  }

  function checkHighScore() {
    if (score > highScore) {
      setHighScore(score);
    }
  }

  function newGame() {
    setGameOver(false);
    setLevel(0);
    setSelected([]);
  }

  useEffect(() => {
    const levelLength = icons.length;
    const currentLength = selected.length;
    if (levelLength === currentLength) {
      levelUp();
      setSelected([]);
    }
  }, [selected]);

  useEffect(() => {
    localStorage.setItem("high-score", JSON.stringify(highScore));
  }, [highScore]);

  return (
    <>
      <div className="App">
        <Header score={score} />
        {!gameOver && <Gameboard icons={icons} checkMove={checkMove} />}
        {gameOver && (
          <GameOver
            lastScore={lastScore}
            highScore={highScore}
            newGame={newGame}
          />
        )}
        <Footer level={level + 1} gameOver={gameOver} />
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
