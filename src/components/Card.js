export default function Card(props) {
  const { icon, checkMove } = props;

  return (
    <div onClick={() => checkMove(icon)} className="card">
      <p>{icon}</p>
    </div>
  );
}
