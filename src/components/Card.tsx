import React, { useState } from "react";

interface Props {
  code: string;
  image: string;
}

function Card({ code, image }: Props) {
  return (
    <div className="guessableCard">
      <img src={image} alt={code}></img>
    </div>
  );
}

export default Card;
