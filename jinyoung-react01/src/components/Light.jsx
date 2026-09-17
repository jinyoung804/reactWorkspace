import { useState } from "react";
export default function Light() {
  const [power, setPower] = useState("OFF");

  return (
    <div>
      {power === "ON" ? (
        <h1 style={{ backgroundColor: "orange" }}>ON</h1>
      ) : (
        <h1 style={{ backgroundColor: "gray" }}>OFF</h1>
      )}

      <button
        onClick={() => {
          setPower(power === "ON" ? "OFF" : "ON");
        }}
      >
        {power === "ON" ? "끄기" : "켜기"}
      </button>
    </div>
  );
}
