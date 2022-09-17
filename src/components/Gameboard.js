import Card from "./Card";
import { shuffle } from "fast-shuffle";

export default function Game(props) {
  const { icons, checkMove, newRound, startGame } = props;
  const cards = icons.map((icon) => <Card icon={icon} checkMove={checkMove} />);
  const shuffledCards = shuffle(cards);

  return (
    <div className="gameboard">
      {newRound && (
        <div className="new-game">
          <h1>welcome!</h1>
          <h2>do not click the same image twice</h2>
          <button onClick={startGame}>let's go!</button>
        </div>
      )}
      {!newRound && shuffledCards}
    </div>
  );
}
