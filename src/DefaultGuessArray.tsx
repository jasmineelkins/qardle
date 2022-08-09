type Card = {
  code: string;
  image: string;
  images: { svg: string; png: string };
  suit: string;
  value: string;
};

const defaultGuessArray: Card[][] = [[], [], [], [], []];

export default defaultGuessArray;
