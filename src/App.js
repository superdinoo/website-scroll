import ImageOne from "./component/ImageOne";
import ImageTwo from "./component/ImageTwo";
import ImageThree from "./component/ImageThree";
import TextBox from "./component/TextBox";
import NavBar from "./component/NavBar/NavBar";
import Hero from "./component/Hero/Hero";

function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <ImageOne />
      <TextBox />
      <ImageTwo />
      <TextBox />
      <ImageThree />
    </div>
  );
}

export default App;
