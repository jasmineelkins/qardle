import React, { useState } from "react";

interface Props {
  code: string;
  image: string;
}

function AvailableCard({ code, image }: Props) {
  function handleClick(e: React.MouseEvent<HTMLImageElement>): void {
    console.log(code);
  }

  return (
    <div className="guessableCard">
      <img src={image} alt={code} onClick={(e) => handleClick(e)}></img>
    </div>
  );
}

export default AvailableCard;
