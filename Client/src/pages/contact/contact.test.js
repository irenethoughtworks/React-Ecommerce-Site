import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Contact } from "./contact";

describe("Contact component tests suite", () => {
  test("renders Contact form properly", () => { 
    render(<Contact />);
    const title = screen.getByText("Contact Us");
    const labels = screen.getAllByRole("input");

    expect(title).toBeInTheDocument();
    expect(labels).toHaveLength(2);
  });

  test("should send contact info", () => {
    const handleOnSubmit = jest.fn();
    render(<Contact onSubmit={handleOnSubmit}/>);
    const contactButton = screen.getByText("Send");
    
    expect(contactButton).toBeInTheDocument();
    
    fireEvent.click(contactButton);
    
    expect(handleOnSubmit).toHaveBeenCalledTimes(1)
  });
})