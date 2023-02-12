import "./styles/textStyles.css"

const textArray: string[][] = [
  ["YOU", "ONLY","LIVE"],["ONCE"],
  ["BUT", "IF", "YOU"],
  ["LIVE", "IT", "RIGHT"],
  ["ONCE", "IS", "ENOUGH"],
];

export const AnimateText = () => {
  return (
    <div id="text">
      {textArray.map((subTextArray: string[]) => (
        <TextDecoration subTextArray={subTextArray} />
      ))}
    </div>
  );
};

export const TextDecoration = (props: { subTextArray: string[] }) => {
  return (
    <div className="line">
      {props.subTextArray.map((text, idx) => (
        <p key={idx} id="word" className="word fancy">
          <Enhance letters={text} />
        </p>
      ))}
    </div>
  );
};

const Enhance = (props: { letters: string }) => {
  return (
    <>
      {props.letters.split("").map((letter) => (
        <span className="letter">{letter}</span>
      ))}
    </>
  );
};
