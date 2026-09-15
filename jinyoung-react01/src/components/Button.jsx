export default function Button({ text, color = "blue", children }) {
  return (
    <>
      <button style={{ color: color }}>
        {text}
        {children}
      </button>
    </>
  );
}
