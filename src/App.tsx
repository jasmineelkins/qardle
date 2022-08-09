import React, { useState } from "react";
import AvailableCardsDeck from "./components/AvailableCardsDeck";
import GuessedCardsGrid from "./components/GuessedCardsGrid";
import Header from "./components/Header";
import Qardle from "./components/Qardle";
import { CardType } from "myTypes";

function App() {
  // get full deck +
  // set & render available cards +
  // set & render goal cards +
  // create guess grid
  // add guess to current row
  // remove guess from current row
  // handle results styling
  // test match
  // handle submit guess turn
  // create hints array
  // get hint
  // end game
  // populate buttons & onClick functions
  // show backs of qards until end game

  const [qardle, setQardle] = useState<CardType[]>([]);
  const [currentGuessArray, setCurrentGuessArray] = useState<CardType[]>([]);

  // const [currentGuessArray, setCurrentGuessArray] = useState<string[]>([
  //   "none",
  //   "none",
  //   "none",
  //   "none",
  //   "none",
  // ]);

  return (
    <div className="pageContainer">
      <Header />
      <Qardle qardle={qardle} setQardle={setQardle} />
      <GuessedCardsGrid
        currentGuessArray={currentGuessArray}
        setCurrentGuessArray={setCurrentGuessArray}
        qardle={qardle}
      />
      <AvailableCardsDeck
        currentGuessArray={currentGuessArray}
        setCurrentGuessArray={setCurrentGuessArray}
        qardle={qardle}
      />
    </div>
  );
}

export default App;
