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
      <div data-testid="credential-content-root-div" className="sub-heading">
        <h2>{heading}</h2>
      </div>
      <div>
        <p>{paragraph}</p>
      </div>
    </>
  );
};

export default React.memo(CredentialContent);
