import { useState } from "react";
export default function Counter() {
  const [count, setCount] = useState(0);
  let btnClick = (e) => {
    //이벤트 핸들러 함수

    setCount(count + 1);
    console.log("이벤트 객체 :", e);
    console.log("좌표 x값 :", e.clientX);
  };
  let btnClick2 = () => {
    //이벤트 핸들러 함수

    setCount(count - 1);
  };
  return (
    <>
      <h1>{count}</h1>
      <button onClick={btnClick}>1 증가</button>
      <button onClick={btnClick2}>1 감소</button>
    </> //btnClick 이벤트를 이 버튼에넣어서 눌렀을 때 btnClick이 실행되게 함
  );
}
