import React from "react";

import "./styles/styles.css";

interface IProps {
  heading: string;
  paragraph: string;
  buttonName: string;
  buttonHandler: () => void;
}

const CredentialImage: React.FC<IProps> = (props) => {
  const { heading, paragraph, buttonName, buttonHandler } = props;

  return (
    <div data-testid="credential-image-root-div" className="login-image-content">
      <div id="sub-heading">
        <h2>{heading}</h2>
      </div>
      <p>{paragraph}</p>
      <button onClick={buttonHandler}>{buttonName}</button>
    </div>
  );
};

export default React.memo(CredentialImage);
