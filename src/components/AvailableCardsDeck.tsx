import React, { useState, useEffect } from "react";
import Card from "./Card";
import axios from "../axios/instance";
import { render } from "@testing-library/react";

type APIDeck = {
  deck_id: string;
  remaining: number;
  shuffled: boolean;
  success: boolean;
};
type APICard = {
  code: string;
  image: string;
  images: { svg: string; png: string };
  suit: string;
  value: string;
};

interface Props {
  currentGuessArray: string[];
  setCurrentGuessArray: (p: string[]) => void;
  goalCards: string[];
}

// industry standard syntax:
const AvailableCardsDeck: React.FunctionComponent<Props> = ({
  currentGuessArray,
  setCurrentGuessArray,
  goalCards,
}: Props) => {
  const [availableCards, setAvailableCards] = useState<APICard[]>([]);

  useEffect(() => {
    getNewFullDeck();
  }, []);

  const getNewFullDeck = async () => {
    try {
      const response = await axios.get<APIDeck>("/new");
      const data = response.data;

      console.log(data);
      getAllCards(data.deck_id);
    } catch (error) {
      console.error(error);
    }
  };

  const getAllCards = async (deckID: string) => {
    try {
      const response = await axios.get<{
        cards: APICard[];
        deck_id: string;
        remaining: number;
        success: boolean;
      }>(`/${deckID}/draw/?count=52`);

      const data = response.data;
      console.log(data.cards);
      setAvailableCards(data.cards);
    } catch (error) {
      console.error(error);
    }
  };

  console.log(availableCards);
  // const renderedCards = availableCards?.map((card: APICard) => {
  //   <Card card={card} />;
  // });

  return (
    <div className="availableCardsDeckContainer">
      {/* <ul>{renderedCards}</ul> */}

      {availableCards?.map((card: APICard) => (
        <Card key={card.code} code={card.code} image={card.image} />
      ))}
    </div>
  );
};

export default AvailableCardsDeck;
