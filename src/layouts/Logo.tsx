import React from "react";

interface IProps {
  color?: string;
  id?: string;
  homeNavigation?: () => void;
}

const Logo: React.FC<IProps> = (props) => {
  const { color, id, homeNavigation } = props;

  return (
    <p className="logo" id={id} style={{ color }} onClick={homeNavigation}>
      <span className="logo-bold">EVENT</span>EXPO
    </p>
  );
};

export default React.memo(Logo);
