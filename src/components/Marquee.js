export default function Marquee(props) {
  const { level, number, gameOver, newRound } = props;
  const classes = "marquee " + "marquee" + number;
  let text;
  if (newRound) {
    text = <h1 className="footer-msg">👋</h1>;
  } else if (gameOver) {
    text = <h1 className="footer-msg">😵‍💫</h1>;
  } else {
    text = (
      <h1>
        level <span className="level">{level}</span>
      </h1>
    );
  }

  return <div className={classes}>{text}</div>;
}
