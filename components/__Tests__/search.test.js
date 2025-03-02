import { render ,act, screen, fireEvent} from "@testing-library/react"
import Body from "../Body"
import SEARCH_DATA from "../mocks/searchMock.json"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"

global.fetch=jest.fn(()=>{
    return Promise.resolve({
        json:()=>{
            return Promise.resolve(SEARCH_DATA);
        }
    })
})
it("should render the body component with search",async()=>{
  await act (async ()=>
    render(
    <BrowserRouter>
    <Body/>
    </BrowserRouter>
    )
    )
    const searchBtn=screen.getByRole("button",{name:"Search"});
    const searchInput=screen.getByTestId("searchInput");
    fireEvent.change(searchInput,{target:{value:"pizza"}})
    expect(searchBtn).toBeInTheDocument();
    fireEvent.click(searchBtn);
    const cards=screen.getAllByTestId("resCard");
    expect(cards.length).toBe(4);
    const topRatedBtn=screen.getByRole("button",{name:"Top rated restaurant"});
    expect(topRatedBtn).toBeInTheDocument();
    fireEvent.click(topRatedBtn);
    const cardstop=screen.getAllByTestId("resCard");
    console.log(cardstop.length);

})
it("should render the body component with top rated restaurant",async()=>{
    await act (async ()=>
      render(
      <BrowserRouter>
      <Body/>
      </BrowserRouter>
      )
      )
      const beforeFilterRes=screen.getAllByTestId("resCard");
      expect(beforeFilterRes.length).toBe(20);
      const afterFiltertopRatedBtn=screen.getByRole("button",{name:"Top rated restaurant"});
      expect(afterFiltertopRatedBtn).toBeInTheDocument();
      fireEvent.click(afterFiltertopRatedBtn);
      const cards=screen.getAllByTestId("resCard");
      expect(cards.length).toBe(3);
    
  })