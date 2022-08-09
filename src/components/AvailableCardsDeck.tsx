import React, { useState, useEffect } from "react";
import AvailableCard from "./AvailableCard";
import axios from "../axios/instance";
import { CardType } from "myTypes";

type Deck = {
  deck_id: string;
  remaining: number;
  shuffled: boolean;
  success: boolean;
};

interface Props {
  currentGuessArray: CardType[][];
  setCurrentGuessArray: (p: CardType[][]) => void;
  qardle: CardType[];
}

// industry standard syntax:
const AvailableCardsDeck: React.FunctionComponent<Props> = ({
  currentGuessArray,
  setCurrentGuessArray,
  qardle,
}: Props) => {
  const [availableCards, setAvailableCards] = useState<CardType[]>([]);

  useEffect(() => {
    getNewFullDeck();
  }, []);

  const getNewFullDeck = async () => {
    try {
      const response = await axios.get<Deck>("/new");
      const data = response.data;

      // console.log(data);
      getAllCards(data.deck_id);
    } catch (error) {
      console.error(error);
    }
  };

  const getAllCards = async (deckID: string) => {
    try {
      const response = await axios.get<{
        cards: CardType[];
        deck_id: string;
        remaining: number;
        success: boolean;
      }>(`/${deckID}/draw/?count=52`);

      const data = response.data;
      // console.log(data.cards);
      setAvailableCards(data.cards);
    } catch (error) {
      console.error(error);
    }
  };

  // console.log(availableCards);
  // const renderedCards = availableCards?.map((card: Card) => {
  //   <Card card={card} />;
  // });

  return (
    <div className="availableCardsDeckContainer">
      {/* <ul>{renderedCards}</ul> */}

      {availableCards?.map((card: CardType) => (
        <AvailableCard key={card.code} code={card.code} image={card.image} />
      ))}
    </div>
  );
};

export default AvailableCardsDeck;
