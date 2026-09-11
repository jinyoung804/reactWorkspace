import "./App.css";
import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";
import Footer from "./components/Footer.jsx";
//jsx의 기본규칙
//1.시작태그와 종료태그 꼭 작성, 하나의 태그로 합칠 경우에도..
//2. 최상위 태그 하나로 묶어서 리턴해야한다.
function App() {
  //root가 되어질 첫번째 컴포넌트

  const name = "김진영";
  const age = 10;
  const isLogin = true;
  const user = {
    name: "김진영",
    isLogin: true,
  };

  const myHobby = ["영화", "운동"];

  return (
    <>
      <div>
        <Header />

        <Main />
        <Footer />
      </div>
      <h1>
        저의 이름은 {name}이고 {age + 5}입니다. <br />
        {age % 2 === 0 ? "짝수" : "홀수"} //3항 연산자
        {String(isLogin)}이고,
        {user.name}이고, {myHobby[0]}
      </h1>
    </>
  );
}

export default App;
