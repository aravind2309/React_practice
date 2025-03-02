import { render, screen } from "@testing-library/react"
import RestaurantCard from "../RestaurantCard"
import MOCK_DATA from "../mocks/resMock.json"
import "@testing-library/jest-dom"

it("Should render the restaurant card with props data",()=>{
    render(<RestaurantCard restaurant={MOCK_DATA}/>)
    const name=screen.getByText("KFC");
    expect(name).toBeInTheDocument();
    
})