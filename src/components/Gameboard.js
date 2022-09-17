import Card from "./Card";
import { shuffle } from "fast-shuffle";

export default function Game(props) {
  const { icons, checkMove } = props;
  const cards = icons.map((icon) => <Card icon={icon} checkMove={checkMove} />);
  const shuffledCards = shuffle(cards);

  return <div className="gameboard">{shuffledCards}</div>;
}
