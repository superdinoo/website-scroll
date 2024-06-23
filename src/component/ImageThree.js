import { Parallax } from "react-parallax";
import Space from "../img/Space.jpg";

const ImageThree = () => (
  <Parallax className="image" bgImage={Space} strength={800}>
    <div className="content">
      <span className="img-txt">go to space</span>
    </div>
  </Parallax>
);

export default ImageThree;
