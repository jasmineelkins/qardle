import React, { useState } from "react";

interface Props {
  code: string;
  image: string;
}

function Qard({ code, image }: Props) {
  return (
    <div className="qard">
      <img src={image} alt={code}></img>
    </div>
  );
}

export default Qard;
