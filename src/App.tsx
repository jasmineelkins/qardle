import React, { useState } from "react";
import AvailableCardsDeck from "./components/AvailableCardsDeck";
import GuessedCardsGrid from "./components/GuessedCardsGrid";
import Header from "./components/Header";

// interface IGoalCards {
//   goalCards: string[]
// }

function App() {
  // get full deck
  // set & render available cards
  // set & render goal cards
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

  const [goalCards, setGoalCards] = useState<string[]>([]);
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
      <GuessedCardsGrid />
      <AvailableCardsDeck
        currentGuessArray={currentGuessArray}
        setCurrentGuessArray={setCurrentGuessArray}
        goalCards={goalCards}
      />
    </div>
  );
}

export default App;
