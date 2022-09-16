export default function Score(props) {
  const { score } = props;
  return (
    <h1>
      score: <span className="points">{score}</span>
    </h1>
  );
}
