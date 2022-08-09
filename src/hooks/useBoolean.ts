import React, { useState } from "react";

// interface StateSetter {
//   state: boolean;
//   setState: (p:string) =>
// }

const useBoolean: any = () => {
  const [state, setState] = useState<boolean>();

  const handleTrue = () => setState(true);
  const handleFalse = () => setState(false);
  const handleToggle = () => setState(!state);

  return [
    state,
    {
      setTrue: handleTrue,
      setFalse: handleFalse,
      setToggled: handleToggle,
    },
  ];
};

export default useBoolean;
