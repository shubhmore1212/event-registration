import { Parallax } from "react-parallax";

export const CardAnimation = (props: any) => {
  const { isSmallCard, smallImage, bigImage, bigImageStyle, strength } = props;
  return (
    <div className="parallax-container">
      <Parallax
        className="parallax-card"
        style={bigImageStyle}
        blur={{ min: -10, max: 10 }}
        bgImage={bigImage}
        strength={strength}
      ></Parallax>
      {isSmallCard && <SmallCardParallax smallImage={smallImage} />}
    </div>
  );
};

const SmallCardParallax = (props: any) => {
  return (
    <div className="small-parallax-container">
      <Parallax
        className="small-parallax-card"
        blur={{ min: -15, max: 10 }}
        bgImage={props.smallImage}
        strength={50}
      ></Parallax>
    </div>
  );
};
