import Card from "./Card";

export default function Game(props) {
  const { icons } = props;
  console.log(icons);
  const cards = icons.map((icon) => <Card icon={icon} />);
  return <div className="gameboard">{cards}</div>;
}
