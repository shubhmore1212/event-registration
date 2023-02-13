import React from "react";

import "./styles/styles.css";

interface IProps {
  heading: string;
  paragraph: string;
}

const CredentialContent: React.FC<IProps> = (props) => {
  const { heading, paragraph } = props;

  return (
    <>
      <div className="sub-heading">
        {/* <h2>Sign In to Event Expo</h2> */}
        <h2>{heading}</h2>
      </div>
      <div>
        {/* <p>Using your email account:</p> */}
        <p>{paragraph}</p>
      </div>
    </>
  );
};

export default React.memo(CredentialContent);
