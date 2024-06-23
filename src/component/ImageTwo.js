import { Parallax } from "react-parallax";
import Shot from "../img/Shot.jpg";

const ImageTwo = () => (
  <Parallax className="image" bgImage={Shot} strength={800}>
    <div className="content">
      <span className="img-txt">go to space</span>
    </div>
  </Parallax>
);

export default ImageTwo;
