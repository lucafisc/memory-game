import React, { useEffect } from "react";

export default function Score(props) {
  const { score } = props;
  useEffect(() => {
    animateScore();
  }, [score]);
  return (
    <h1 className="points-container">
      score:{" "}
      <span id="score" className="points">
        {score}
      </span>
    </h1>
  );
}

function animateScore() {
  const score = document.getElementById("score");
  score.classList.add("new-point");
  setTimeout(() => {
    score.classList.remove("new-point");
  }, 300);
}
