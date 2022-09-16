import Score from "./Score";

export default function Header(props) {
  const { score } = props;
  return (
    <header className="header">
      <h1>memory game</h1>
      <Score score={score} />
    </header>
  );
}
