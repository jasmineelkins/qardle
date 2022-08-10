import React, { useState, useEffect } from "react";
import GuessedCard from "./GuessedCard";
import { CardType } from "myTypes";

interface Props {
  currentGuessArray: string[];
  setCurrentGuessArray: (p: string[]) => void;
  qardle: CardType[];
}

const GuessedCardsGrid: React.FC<Props> = ({
  currentGuessArray,
  setCurrentGuessArray,
  qardle,
}) => {
  // hardcode grid from null array, temp:
  const nullArray: (CardType | null)[][] = [
    [null, null, null, null, null],
    [null, null, null, null, null],
    [null, null, null, null, null],
    [null, null, null, null, null],
    [null, null, null, null, null],
  ];

  useEffect(() => {
    console.log("Current guess array: ", currentGuessArray);
  }, [currentGuessArray]);

  const renderedGrid = nullArray.map((row: (CardType | null)[]) =>
    row.map((cell: CardType | null) => <GuessedCard cell={cell} />)
  );

  return <div className="guessedCardsGridContainer">{renderedGrid}</div>;
};

export default GuessedCardsGrid;
