import { render, screen } from "@testing-library/react";
import {
  SignUpInitialValues,
  signUpValidationSchema,
} from "constants/formConstants";
import SignUpForm from "../SignUpForm";

const handleSubmit = jest.fn();
const imageButtonHandler = jest.fn();
const homeNavigation = jest.fn();

const MockSignUpForm = () => {
  return (
    <SignUpForm
      initialValues={SignUpInitialValues}
      validationSchema={signUpValidationSchema}
      handleSubmit={handleSubmit}
      buttonHandler={imageButtonHandler}
      homeNavigation={homeNavigation}
    />
  );
};

describe("Sign Up Form Component", () => {
  it("renders the logo", () => {
    render(<MockSignUpForm/>)

    const paragraphElement=screen.getByText(/A few clicks away from enjoying the events you enjoyed never before!/i)

    expect(paragraphElement).toBeInTheDocument();
  });
});
