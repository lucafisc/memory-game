export function Footer(props) {
  const { level } = props;
  return (
    <footer className="footer">
      <h1>
        level <span>{level}</span>
      </h1>
    </footer>
  );
}
