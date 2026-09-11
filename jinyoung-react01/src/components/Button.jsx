export default function Button({ text, color = "blue" }) {
  return (
    <>
      <button style={{ color: color }}>{text}</button>
    </>
  );
}
