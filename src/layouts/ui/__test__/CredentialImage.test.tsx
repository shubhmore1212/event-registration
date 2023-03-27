import { logRoles, render, screen } from "@testing-library/react";
import CredentialImage from "../CredentialImage";

// const { heading, paragraph, buttonName, buttonHandler } = props;

const buttonHandler = jest.fn();

const MockCredentialImage = () => {
  return (
    <CredentialImage
      heading="Hello, Friend!"
      paragraph="Enter your details and start a journey with us!"
      buttonName="Sign Up"
      buttonHandler={buttonHandler}
    />
  );
};

describe("Credential Image", () => {
  it("renders text", () => {
    render(<MockCredentialImage />);

    const headingElement = screen.getByRole("heading", {
      name: /Hello, Friend!/i,
    });
    const paragraphElement = screen.getByText(
      /Enter your details and start a journey with us!/i
    );
    const buttonElement = screen.getByRole("button", { name: /Sign Up/i });

    expect(headingElement).toBeInTheDocument();
    expect(paragraphElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
  });
});
