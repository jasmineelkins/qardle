import React, { useState } from "react";
import GuessedCard from "./GuessedCard";
import { CardType } from "myTypes";

interface Props {
  currentGuessArray: CardType[];
  setCurrentGuessArray: (p: CardType[]) => void;
  qardle: CardType[];
}

const GuessedCardsGrid: React.FC<Props> = ({
  currentGuessArray,
  setCurrentGuessArray,
  qardle,
}) => {
  const nullArray: (CardType | null)[][] = [
    [null, null, null, null, null],
    [null, null, null, null, null],
    [null, null, null, null, null],
    [null, null, null, null, null],
    [null, null, null, null, null],
  ];

  const renderedGrid = nullArray.map((row: (CardType | null)[]) =>
    row.map((cell: CardType | null) => <GuessedCard cell={cell} />)
  );

  return <div className="guessedCardsGridContainer">{renderedGrid}</div>;
};

export default GuessedCardsGrid;
