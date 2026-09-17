import { useState } from "react";

export default function LikeButton() {
  const [likes, setLikes] = useState(0);
  let btnClick = () => {
    setLikes(likes + 1);
  };
  return (
    <div>
      <button onClick={btnClick}> 좋아요❤️</button>
      {likes}
    </div>
  );
}
