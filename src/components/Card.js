export default function Card(props) {
  const { icon } = props;

  return (
    <div className="card">
      <p>{icon}</p>
    </div>
  );
}
