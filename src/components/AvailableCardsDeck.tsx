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
  currentGuessArray: CardType[];
  setCurrentGuessArray: (p: CardType[]) => void;
  qardle: CardType[];
}

// industry standard syntax:
const AvailableCardsDeck: React.FC<Props> = ({
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

  const renderedCards = availableCards?.map((card: CardType) => (
    <AvailableCard
      key={card.code}
      card={card}
      currentGuessArray={currentGuessArray}
      setCurrentGuessArray={setCurrentGuessArray}
      qardle={qardle}
    />
  ));

  return (
    <div className="availableCardsDeckContainer">
      {renderedCards}

      {/* {availableCards?.map((card: CardType) => (
        <AvailableCard
          key={card.code}
          card={card}
          currentGuessArray={currentGuessArray}
          setCurrentGuessArray={setCurrentGuessArray}
          qardle={qardle}
        />
      ))} */}
    </div>
  );
};

export default AvailableCardsDeck;
