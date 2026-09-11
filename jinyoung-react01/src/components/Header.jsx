import "./Header.css";
export default function Header() {
  let cssVar = {
    marginTop: "50px",
    backgroundColor: "yellow",
  };
  return (
    <header>
      <h1 style={{ color: "red", backgroundColor: "yellow" }}>header</h1>
      <h2 className="sayHello">메뉴 : 학교소개 커뮤니티 오시는길 로그인</h2>
      <h3 style={cssVar}>Welcome!!!!</h3>
    </header>
  );
}
