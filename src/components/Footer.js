import Marquee from "./Marquee";

export default function Footer(props) {
  const { level, gameOver, newRound } = props;
  return (
    <footer className="footer">
      <Marquee
        level={level}
        number={"0"}
        gameOver={gameOver}
        newRound={newRound}
      />
      <Marquee
        level={level}
        number={"1"}
        gameOver={gameOver}
        newRound={newRound}
      />
      <Marquee
        level={level}
        number={"2"}
        gameOver={gameOver}
        newRound={newRound}
      />
      <Marquee
        level={level}
        number={"3"}
        gameOver={gameOver}
        newRound={newRound}
      />
      <Marquee
        level={level}
        number={"4"}
        gameOver={gameOver}
        newRound={newRound}
      />
    </footer>
  );
}
