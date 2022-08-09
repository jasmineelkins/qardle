declare module "myTypes" {
  type CardType = {
    code: string;
    image: string;
    images: { svg: string; png: string };
    suit: string;
    value: string;
  };
}

module.exports = {
  CardType,
};
