export default function Marquee(props) {
  const { level, number } = props;
  const classes = "marquee " + "marquee" + number;

  return (
    <div className={classes}>
      <h1>
        level <span className="level">{level}</span>
      </h1>
    </div>
  );
}
