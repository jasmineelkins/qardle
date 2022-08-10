import React, { useState, useEffect } from "react";
import Qard from "./Qard";
import axios from "../axios/instance";
import { CardType } from "myTypes";

interface Props {
  qardle: CardType[];
  setQardle: (p: CardType[]) => void;
}

type APIDeck = {
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
      const response = await axios.get<APIDeck>(`/new/shuffle/?deck_count=1`);
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

      // data.cards.map((card) => setQardle([...qardle, card.code]));
      setQardle(data.cards);
    } catch (error) {
      console.error(error);
    }
  };

  const renderQardle = qardle
    ? qardle.map((card: CardType) => (
        <Qard key={card.code} code={card.code} image={card.image} />
      ))
    : null;

  return <div className="qardleContainer">{renderQardle}</div>;
}

export default Qardle;
