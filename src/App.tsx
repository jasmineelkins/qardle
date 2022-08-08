import React from "react";
import AvailableCardsDeck from "./components/AvailableCardsDeck";
import GuessedCardsGrid from "./components/GuessedCardsGrid";
import Header from "./components/Header";

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

  return (
    <div className="pageContainer">
      <Header />
      <GuessedCardsGrid />
      <AvailableCardsDeck />
    </div>
  );
}

export default App;
