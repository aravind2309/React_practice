import { render } from "@testing-library/react"
import Contact from "../Contact"
import { screen } from "@testing-library/react";
import "@testing-library/jest-dom"
describe("Contact Us Page Test Case",()=>{
it("Should load contact us component",()=>{
    render(<Contact/>);
   const heading= screen.getByRole("heading");
   expect(heading).toBeInTheDocument();
})
it("Should load button inside contact",()=>{
    render(<Contact/>);
   const button= screen.getByRole("button");
   expect(button).toBeInTheDocument();
})
it("Should load label inside contact",()=>{
    render(<Contact/>);
   const label= screen.getByLabelText("Name:");
   expect(label).toBeInTheDocument();
   
})
it("Should load two input textbox inside contact",()=>{
    render(<Contact/>);
   const input= screen.getAllByRole("textbox");
   expect(input.length).toBe(2);
})});