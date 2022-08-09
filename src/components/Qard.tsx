import React, { useState } from "react";

interface Props {
  code: string;
  image: string;
}

function Qard({ code, image }: Props) {
  // state: if game end, display fronts of cards. else, backs
  // img src = cardBack.jpg
  return (
    <div className="qard">
      <img src={image} alt={code}></img>
    </div>
  );
}

export default Qard;
