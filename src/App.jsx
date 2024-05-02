import "./App.css";
import CircleDots from "./components/CircleDots/CircleDots";
import JumpingDots from "./components/JumpingDots/JumpingDots";
import RotatingCircle from "./components/RotatingCircle/RotatingCircle";
import ThreeDots from "./components/TheeDots/ThreeDots";

function App() {
  return (
    <>
      <h2>Default</h2>
      <h2>Customized</h2>
      <ThreeDots />
      <ThreeDots primaryColor={"red"} secondaryColor={"maroon"} />

      <RotatingCircle />
      <RotatingCircle
        circleColor={"#f0f"}
        circleDiameter={100}
        circleBorderSize={15}
        circleSpeed={1}
      />

      <CircleDots />
      <CircleDots circleDotDiameter={100} circleDotColor={"#00ff0a"} />

      <JumpingDots />
      <JumpingDots jumpingDotsSpeed={3} />
    </>
  );
}

export default App;
