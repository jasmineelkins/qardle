import React, { useState } from "react";

type Props = {
  //   children?: JSX.Element;
  children?: React.ReactNode;
  handleClick: () => void;
};

const Button: React.FC<Props> = ({ handleClick, children }) => {
  return (
    <button className="button" onClick={handleClick}>
      {children}
    </button>
  );
};

export default Button;
