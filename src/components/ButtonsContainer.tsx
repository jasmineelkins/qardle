import React, { useState } from "react";
import Button from "./Button";

function ButtonsContainer() {
  function submitGuess() {
    console.log("submit guess");
    window.scrollTo(0, 350);

    // currentGuessArray.includes("none")
    //   ? alert("You must select 5 cards")
    //   : handleSubmit();
  }

  function getHint() {
    console.log("get hint");
    // const hintText = document.querySelector("#hintDiv");

    // hintText.classList.toggle("hidden");

    // if (!hintClicked) {
    //   hintText.textContent = getHint();
    //   hintClicked = true;
    // } else {
    //   hintClicked = false;
    //   console.log(hintClicked);
    // }
  }

  function resetGame() {
    document.location.reload();
  }

  function giveUp() {
    console.log("give up");
    // losing = true;
    // endGame();
  }

  return (
    <div className="buttonsDiv">
      <Button handleClick={submitGuess}>Submit</Button>
      <Button handleClick={resetGame}>Reset</Button>
      <Button handleClick={getHint}>Hint?</Button>
      <Button handleClick={giveUp}>Give up</Button>
    </div>
  );
}

export default ButtonsContainer;
