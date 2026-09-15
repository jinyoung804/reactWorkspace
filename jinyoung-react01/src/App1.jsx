import Button from "./components/Button";
import Footer from "./components/Footer";
function App1() {
  let btnProps = {
    text: "메일",
    color: "red",
    img: "a.jpg",
    alt: "대체텍스트",
  };
  return (
    <>
      <Button text="메일" color="red" />
      <Button {...btnProps} />
      <Button>
        <div>자식</div>
      </Button>
      <Button>
        <div>자식</div>
      </Button>
      <Button>
        <Footer />
      </Button>
    </>
  );
}

export default App1;
