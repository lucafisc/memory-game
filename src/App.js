import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { levelData } from "./components/levelData";
import "./styles/App.css";
import "./styles/Animations.css";
function App() {
  console.log(levelData[0]);
  const [level, setLevel] = useState(0);
  useEffect(() => {
    const backgroundColor = levelData[level]["backgroundColor"];
    const hoverColor = levelData[level]["hoverColor"];
    const speed = levelData[level]["speed"];
    changeStyles(backgroundColor, hoverColor, speed);
  }, [level]);

  function handleClick() {
    setLevel((prevLevel) => prevLevel + 1);
  }
  return (
    <div className="App">
      <Header />
      <button onClick={handleClick}>+</button>
      <Footer level={level + 1} />
    </div>
  );
}

function changeStyles(background, hover, speed) {
  document.documentElement.style.setProperty("--background", background);
  document.documentElement.style.setProperty("--hover", hover);
  document.documentElement.style.setProperty("--speed", speed);
}

export default App;
