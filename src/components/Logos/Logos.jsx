import nissan from "../../../assets/nissan.png";
import BMw from "../../../assets/BMW.png";
import volvo from "../../../assets/volvo.png";
import toyota from "../../../assets/toyota.png";
import subaru from "../../../assets/subaru.png";
import suzuki from "../../../assets/suzuki.png";
import mercedes from "../../../assets/mercedes.png";
import mitsubishi from "../../../assets/mitsubishi.png";

import classes from "./Logos.module.css";

function Logos() {
  return (
    <div className={classes.logos}>
      <img src={nissan} alt="Loga Image" />
      <img src={BMw} alt="Loga Image" />
      <img src={volvo} alt="Loga Image" />
      <img src={toyota} alt="Loga Image" />
      <img src={subaru} alt="Loga Image" />
      <img src={suzuki} alt="Loga Image" />
      <img src={mercedes} alt="Loga Image" />
      <img src={mitsubishi} alt="Loga Image" />
    </div>
  );
}

export default Logos;
