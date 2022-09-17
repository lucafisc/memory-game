export default function GameOver(props) {
  const { lastScore, highScore, newGame } = props;
  return (
    <div className="game-over">
      <h1>game over</h1>
      <h2>your score: {lastScore}</h2>
      <h2>high score: {highScore}</h2>
      <button onClick={newGame}>play again</button>
    </div>
  );
}
