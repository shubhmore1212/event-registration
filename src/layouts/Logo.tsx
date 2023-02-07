import React from "react";

interface IProps{
    color?:string;
    id?:string
}

const Logo:React.FC<IProps> = (props) => {
    const {color,id}=props;
  return (
    <>
      <p className="logo" id={id} style={{color}}>
        <span className="logo-bold">EVENT</span>EXPO
      </p>
    </>
  );
};

export default React.memo(Logo);
