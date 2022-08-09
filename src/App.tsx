import React, { useState } from "react";
import AvailableCardsDeck from "./components/AvailableCardsDeck";
import GuessedCardsGrid from "./components/GuessedCardsGrid";
import Header from "./components/Header";
import Qardle from "./components/Qardle";

type APICard = {
  code: string;
  image: string;
  images: { svg: string; png: string };
  suit: string;
  value: string;
};

function App() {
  // get full deck +
  // set & render available cards +
  // set & render goal cards +
  // create guess grid
  // add guess
  // remove guess
  // handle results styling
  // test match
  // handle submit guess
  // create hints array
  // get hint
  // end game
  // populate buttons & onClick functions
  // show backs of qards until end game

  const [qardle, setQardle] = useState<APICard[]>([]);
  const [currentGuessArray, setCurrentGuessArray] = useState<string[]>([
    "none",
    "none",
    "none",
    "none",
    "none",
  ]);

  return (
    <div className="pageContainer">
      <Header />
      <Qardle qardle={qardle} setQardle={setQardle} />
      <GuessedCardsGrid />
      <AvailableCardsDeck
        currentGuessArray={currentGuessArray}
        setCurrentGuessArray={setCurrentGuessArray}
        qardle={qardle}
      />
    </div>
  );
}

export default App;
