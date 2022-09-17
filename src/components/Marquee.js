export default function Marquee(props) {
  const { level, number, gameOver } = props;
  const classes = "marquee " + "marquee" + number;
  const text = gameOver ? (
    <h1 className="game-over-msg">😵‍💫</h1>
  ) : (
    <h1>
      level <span className="level">{level}</span>
    </h1>
  );
  return <div className={classes}>{text}</div>;
}
