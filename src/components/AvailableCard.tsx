import React, { useState } from "react";
import { CardType } from "myTypes";

interface Props {
  card: CardType;
  currentGuessArray: string[];
  setCurrentGuessArray: (p: string[]) => void;
  qardle: CardType[];
}

const AvailableCard: React.FC<Props> = ({
  card,
  currentGuessArray,
  setCurrentGuessArray,
  qardle,
}: Props) => {
  function handleClick(e: React.MouseEvent<HTMLImageElement>): void {
    console.log(card.code);
    setCurrentGuessArray([...currentGuessArray, card.code]);
  }

  return (
    <div className="availableCard">
      <img
        src={card.image}
        alt={card.code}
        onClick={(e) => handleClick(e)}
      ></img>
    </div>
  );
};

export default AvailableCard;
