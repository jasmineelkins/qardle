import React, { useState, useEffect } from "react";
import Qard from "./Qard";
import axios from "../axios/instance";

interface Props {
  qardle: Card[];
  setQardle: (p: Card[]) => void;
}

type Deck = {
  deck_id: string;
  remaining: number;
  shuffled: boolean;
  success: boolean;
};

type Card = {
  code: string;
  image: string;
  images: { svg: string; png: string };
  suit: string;
  value: string;
};

function Qardle({ qardle, setQardle }: Props) {
  useEffect(() => {
    getQards();
  }, []);

  const getQards = async () => {
    try {
      const response = await axios.get<Deck>(`/new/shuffle/?deck_count=1`);
      const data = response.data;

      // console.log(data);
      getRandomCards(data.deck_id);
    } catch (error) {
      console.error(error);
    }
  };

  const getRandomCards = async (deckID: string) => {
    try {
      const response = await axios.get<{
        cards: Card[];
        deck_id: string;
        remaining: number;
        success: boolean;
      }>(`/${deckID}/draw/?count=5`);

      const data = response.data;
      console.log("QARDLE: ", data.cards);
      setQardle(data.cards);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="qardleContainer">
      {qardle
        ? qardle?.map((card: Card) => (
            <Qard key={card.code} code={card.code} image={card.image} />
          ))
        : null}
    </div>
  );
}

export default Qardle;
