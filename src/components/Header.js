import Score from "./Score";

export default function Header() {
  return (
    <header className="header">
      <h1>memory game</h1>
      <Score score={0} />
    </header>
  );
}
