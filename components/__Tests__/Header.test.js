import { fireEvent, getByText, render } from "@testing-library/react"
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../appStore";
import { BrowserRouter } from "react-router-dom";
import { screen } from "@testing-library/react";
import "@testing-library/jest-dom"

it("Should render header component in login button",()=>{
    render(
    <BrowserRouter>
    <Provider store={appStore}>
    <Header/>
    </Provider>
    </BrowserRouter>
   
    );
    const button=screen.getByText("Login");
    expect(button).toBeInTheDocument();
})
it("Should render cart item in header component",()=>{
    render(
    <BrowserRouter>
    <Provider store={appStore}>
    <Header/>
    </Provider>
    </BrowserRouter>
   
    );
    const cartItems=screen.getByText(/Cart/);
    expect(cartItems).toBeInTheDocument();
})
it("Should render logout button onclick of Login",()=>{
    render(
    <BrowserRouter>
    <Provider store={appStore}>
    <Header/>
    </Provider>
    </BrowserRouter>
   
    );
    const loginButton=screen.getByRole("button",{name:"Login"});
    fireEvent.click(loginButton);
    const logoutButton=screen.getByRole("button",{name:"Logout"});
    expect(logoutButton).toBeInTheDocument();

})