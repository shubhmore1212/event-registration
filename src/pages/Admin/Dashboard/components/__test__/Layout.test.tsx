import { logRoles, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Layout from "../Layout";
import { cardData } from "./AdminCards.test";
import { events, users } from "./CommonTable.test";

const toggleState = jest.fn();

const MockLayout = () => {
  return (
    <BrowserRouter>
      <Layout
        state={true}
        toggleState={toggleState}
        events={events}
        users={users}
        counts={cardData}
      />
    </BrowserRouter>
  );
};

describe("Layout component", () => {
  it("renders count of every element",()=>{
    render(<MockLayout/>);

    const headingElement=screen.getAllByRole("heading")
    const buttonElement=screen.getAllByRole("button")
    const tableElement=screen.getAllByRole("table")
    const rowGroupElement=screen.getAllByRole("rowgroup")
    const rowElement=screen.getAllByRole("row")
    const columnHeaderElement=screen.getAllByRole("columnheader")

    expect(headingElement.length).toBe(4)
    expect(buttonElement.length).toBe(5)
    expect(tableElement.length).toBe(1)
    //row group: thead+tbody
    expect(rowGroupElement.length).toBe(1+1)
    expect(rowElement.length).toBe(1+3)
    expect(columnHeaderElement.length).toBe(6)
  })
});
