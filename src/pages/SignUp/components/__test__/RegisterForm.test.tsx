import { logRoles, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import RegisterForm from "../RegisterForm";

import {
  SignUpInitialValues,
  signUpValidationSchema,
} from "constants/formConstants";
import { FileExcelBoxOutline } from "mdi-material-ui";

const MockRegisterForm = () => {
  const handleSubmit = jest.fn();

  return (
    <RegisterForm
      initialValues={SignUpInitialValues}
      validationSchema={signUpValidationSchema}
      handleSubmit={handleSubmit}
    />
  );
};

describe("Register Form component", () => {
  it("renders sign up input box,button", () => {
    render(<MockRegisterForm />);

    const first_name = screen.getByPlaceholderText(/John/);
    const last_name = screen.getByPlaceholderText(/Fernandes/);
    const contact_no = screen.getByPlaceholderText(/90087654230/);
    const email = screen.getByPlaceholderText(/john@gmail.com/);
    const role_id = screen.getByRole("combobox");
    const default_option = screen.getByRole("option", {
      name: /Select One/i,
    });
    const option1 = screen.getByRole("option", {
      name: /Registrant/i,
    });
    const option2 = screen.getByRole("option", {
      name: /Organizer/i,
    });
    const buttonElement = screen.getByRole("button", {
      name: /Sign Up/i,
    });

    expect(first_name).toBeInTheDocument();
    expect(last_name).toBeInTheDocument();
    expect(contact_no).toBeInTheDocument();
    expect(email).toBeInTheDocument();
    expect(role_id).toBeInTheDocument();
    expect(default_option).toBeInTheDocument();
    expect(option1).toBeInTheDocument();
    expect(option2).toBeInTheDocument();
  });

  it("renders text input", async () => {
    render(<MockRegisterForm />);

    const user = userEvent.setup();

    const first_name = screen.getByPlaceholderText(/John/);
    const last_name = screen.getByPlaceholderText(/Fernandes/);
    const contact_no = screen.getByPlaceholderText(/90087654230/);
    const email = screen.getByPlaceholderText(/john@gmail.com/);
    
    await user.type(first_name, "Manny");
    await user.type(last_name, "Dhoni");
    await user.type(contact_no, "9001820000");
    await user.type(email, "manny@gmail.com");

    expect(first_name).toHaveValue("Manny");
    expect(last_name).toHaveValue("Dhoni");
    expect(contact_no).toHaveValue("9001820000");
    expect(email).toHaveValue("manny@gmail.com");
  });
});
