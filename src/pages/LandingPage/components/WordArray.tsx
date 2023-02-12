import React from "react";

import WordPlay from "./WordPlay";

import { words } from "../../../constants/constants";

const WordArray = () => {
  return (
    <>
      {words.map((word, idx) => (
        <div key={idx} className={`word-item-${idx}`}>
          <WordPlay word={word} id={idx} />
        </div>
      ))}
    </>
  );
};

export default React.memo(WordArray);
