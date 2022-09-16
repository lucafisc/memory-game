import Score from "./Score";

export function Header() {
  return (
    <header className="header">
      <h1 className="header">memory game</h1>
      <Score score={0} />
    </header>
  );
}
