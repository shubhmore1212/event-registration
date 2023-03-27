import { render, screen } from "@testing-library/react";
import { CustomButton } from "../CustomButton";

// name, buttonHandler, className

describe("Custom Button Component", () => {
  it("renders button text", () => {
    render(
      <CustomButton
        name={"Log In"}
        buttonHandler={jest.fn()}
        className={"login-btn"}
      />
    );

    const textElement = screen.getByRole("button", { name: /Log In/i });

    expect(textElement).toBeInTheDocument();
  });
});
