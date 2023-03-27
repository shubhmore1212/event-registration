import { render, screen } from "@testing-library/react";
import AdminCards from "../AdminCards";

export const cardData = [
  { user: "Events", data: 10 },
  { user: "Organizer", data: 25 },
  { user: "Registrants", data: 7 },
  { user: "Registered Users", data: 4 },
];

describe("Admin Card Component", () => {
  it("renders texts", () => {
    render(<AdminCards cardData={cardData} />);
    const eventText = screen.getByText(/events/i);
    const organizerText = screen.getByText(/organizer/i);
    const registrantText = screen.getByText(/registrants/i);
    const registeredUserText = screen.getByText(/registered users/i);

    expect(eventText).toBeInTheDocument();
    expect(organizerText).toBeInTheDocument();
    expect(registrantText).toBeInTheDocument();
    expect(registeredUserText).toBeInTheDocument();
  });

  it("renders numbers", () => {
    render(<AdminCards cardData={cardData} />);
    const eventText = screen.getByText(/10/i);
    const organizerText = screen.getByText(/25/i);
    const registrantText = screen.getByText(/7/i);
    const registeredUserText = screen.getByText(/4/i);

    expect(eventText).toBeInTheDocument();
    expect(organizerText).toBeInTheDocument();
    expect(registrantText).toBeInTheDocument();
    expect(registeredUserText).toBeInTheDocument();
  });
});
