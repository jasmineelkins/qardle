import React, { useState } from "react";
import GuessedCard from "./GuessedCard";
import { CardType } from "myTypes";

interface Props {
  currentGuessArray: CardType[][];
  setCurrentGuessArray: (p: CardType[][]) => void;
  qardle: CardType[];
}

const GuessedCardsGrid: React.FunctionComponent<Props> = ({
  currentGuessArray,
  setCurrentGuessArray,
  qardle,
}: Props) => {
  return <div className="guessedCardsGridContainer"></div>;
};

export default GuessedCardsGrid;
