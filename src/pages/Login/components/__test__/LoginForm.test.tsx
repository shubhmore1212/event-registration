import { logRoles, render, screen } from "@testing-library/react";
import {
  loginInitialValues,
  LoginValidationSchema,
} from "constants/formConstants";
import LoginForm from "../LoginForm";

const handleSubmit = jest.fn();
const homeNavigation = jest.fn();
const buttonHandler = jest.fn();

const MockLoginForm = () => {
  return (
    <LoginForm
      initialValues={loginInitialValues}
      validationSchema={LoginValidationSchema}
      handleSubmit={handleSubmit}
      buttonHandler={buttonHandler}
      homeNavigation={homeNavigation}
    />
  );
};

describe("Login Form Component", () => {
//   it("renders the element", () => {
//     render(<MockLoginForm />);

//     logRoles(screen.getByTestId("login-form-root-div"));
//   });

  it("renders the heading and button", () => {
    render(<MockLoginForm/>);

    const textElement=screen.getByRole("heading",{name:/Sign In to Event Expo/})
    const buttonElement=screen.getByRole("button",{name:/Log In/})

    expect(textElement).toBeInTheDocument()
    expect(buttonElement).toBeInTheDocument()
  });
});
