import Marquee from "./Marquee";

export default function Footer(props) {
  const { level } = props;
  return (
    <footer className="footer">
      <Marquee level={level} number={"0"} />
      <Marquee level={level} number={"1"} />
      <Marquee level={level} number={"2"} />
      <Marquee level={level} number={"3"} />
      <Marquee level={level} number={"4"} />
    </footer>
  );
}
