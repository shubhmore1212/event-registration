import { render, screen } from "@testing-library/react";
import SelectElementChips from "../SelectElementChips";

const toggleState = jest.fn();

describe("Select Element Chips Component", () => {
  it("render texts", () => {
    render(<SelectElementChips state={true} toggleState={toggleState} />);

    const eventTextElement=screen.getByText(/Events/i);
    const userTextElement=screen.getByText(/Users/i);
    
    expect(eventTextElement).toBeInTheDocument();
    expect(userTextElement).toBeInTheDocument();
  });

  it("renders the select element chips(user,events)", () => {
    render(<SelectElementChips state={true} toggleState={toggleState} />);

    const eventButton = screen.getByRole("button", {
      name: /Events/i,
    });
    const userButton = screen.getByRole("button", {
      name: /Users/i,
    });

    expect(eventButton).toBeInTheDocument();
    expect(userButton).toBeInTheDocument();
  });
});
