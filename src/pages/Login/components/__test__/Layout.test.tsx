import { render, screen } from "@testing-library/react";
import {
  loginInitialValues,
  LoginValidationSchema,
} from "constants/formConstants";
import Layout from "../Layout";

const handleSubmit = jest.fn();
const imageButtonHandler = jest.fn();
const homeNavigation = jest.fn();

describe("Layout", () => {
  it("renders the heading element", () => {
    render(
      <Layout
        initialValues={loginInitialValues}
        validationSchema={LoginValidationSchema}
        handleSubmit={handleSubmit}
        buttonHandler={imageButtonHandler}
        homeNavigation={homeNavigation}
      />
    );

    const textElement=screen.getByRole("heading",{name:/Sign In to Event Expo/})
    const buttonElement=screen.getByRole("button",{name:/Log In/})

    expect(textElement).toBeInTheDocument()
    expect(buttonElement).toBeInTheDocument()
  });
});
