import React, { useState } from "react";
import { CardType } from "myTypes";

interface Props {
  cell: CardType | null;
}

const GuessedCard: React.FC<Props> = ({ cell }) => {
  return <div className="guessedCard guessBox"></div>;
};

export default GuessedCard;
