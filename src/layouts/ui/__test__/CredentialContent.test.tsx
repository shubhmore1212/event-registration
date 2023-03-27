import { logRoles, render, screen } from "@testing-library/react";
import CredentialContent from "../CredentialContent";

const heading = "Sign In to Event Expo";
const paragraph = "Using your email account:";

const MockCredentialContent = () => {
  return <CredentialContent heading={heading} paragraph={paragraph} />;
};

describe("Credential Content Component", () => {
  it("renders text", () => {
    render(<MockCredentialContent />);

    const headingElement = screen.getByRole("heading", {
      name: /Sign In to Event Expo/i,
    });
    const textElement = screen.getByText(/Using your email account:/i);

    expect(headingElement).toBeInTheDocument();
    expect(textElement).toBeInTheDocument();
  });
});
