import Marquee from "./Marquee";

export default function Footer(props) {
  const { level, gameOver } = props;
  return (
    <footer className="footer">
      <Marquee level={level} number={"0"} gameOver={gameOver} />
      <Marquee level={level} number={"1"} gameOver={gameOver} />
      <Marquee level={level} number={"2"} gameOver={gameOver} />
      <Marquee level={level} number={"3"} gameOver={gameOver} />
      <Marquee level={level} number={"4"} gameOver={gameOver} />
    </footer>
  );
}
