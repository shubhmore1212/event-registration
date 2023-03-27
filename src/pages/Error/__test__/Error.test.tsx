import { logRoles, render, screen } from "@testing-library/react";
import { ERROR } from "../../../constants";
import { BrowserRouter } from "react-router-dom";
import Error, { IErrors } from "../Error";

const MockErrorComponent = (props: IErrors) => {
  return (
    <BrowserRouter>
      <Error {...props} />
    </BrowserRouter>
  );
};

describe("Error Component", () => {
  it("renders text", () => {
    render(<MockErrorComponent {...ERROR.error400Props} />);

    const number = screen.getByText(/400/i);
    const heading = screen.getByText(/Something wrong with credentials!/i);
    const description = screen.getByText(/Missing Username and Password/i);

    expect(number).toBeInTheDocument();
    expect(heading).toBeInTheDocument();
    expect(description).toBeInTheDocument();
  });

  it("renders image",()=>{
    render(<MockErrorComponent {...ERROR.error400Props}/>);

    const imageElement=screen.getByRole("img",{
        name:/error-illustration/i
    })
    expect(imageElement).toBeInTheDocument();
  })

  it("renders button",()=>{
    render(<MockErrorComponent {...ERROR.error400Props}/>);

    const buttonElement=screen.getByRole("button",{
        name:/Back to Home/i
    })
    expect(buttonElement).toBeInTheDocument();
  })
});
