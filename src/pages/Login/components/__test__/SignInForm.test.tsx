import { render, screen } from "@testing-library/react";
import {
  loginInitialValues,
  LoginValidationSchema,
} from "constants/formConstants";
import SignInForm from "../SignInForm";

const handleSubmit = jest.fn();

const MockSignInFormComponent = () => {
  return (
    <SignInForm
      initialValues={loginInitialValues}
      validationSchema={LoginValidationSchema}
      handleSubmit={handleSubmit}
    />
  );
};

describe("Sign In Form", () => {
  it("renders input", () => {
    render(<MockSignInFormComponent />);

    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toBeInTheDocument();
  });

  it("renders the login button", async () => {
    render(<MockSignInFormComponent />);

    const buttonElement = screen.getByRole("button", { name: /Log In/i });
    expect(buttonElement).toBeInTheDocument();
  });
});
