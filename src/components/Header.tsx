import React, { useState } from "react";
import FAQ from "./FAQ";
// import useBoolean from "../hooks/useBoolean";
import { FaQuestion } from "react-icons/fa";
import { ImBrightnessContrast } from "react-icons/im";

const Header: React.FC = () => {
  // const [isToggled, { setToggled }] = useBoolean(false);

  const [isToggled, setIsToggled] = useState<boolean>(false);

  return (
    <header>
      <div id="leftDiv"></div>

      <div id="titleDiv">
        <h1>Qardle</h1>
      </div>

      <div id="headerBtnDiv">
        <button id="contrastBtn">
          <ImBrightnessContrast />
        </button>
        <button id="faqBtn" onClick={() => setIsToggled(!isToggled)}>
          <FaQuestion />
        </button>

        <FAQ isToggled={isToggled} />
      </div>
    </header>
  );
};

export default Header;
