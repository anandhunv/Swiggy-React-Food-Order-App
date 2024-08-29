import { fireEvent, getAllByTestId, render, screen } from "@testing-library/react"
import Body from "../Body"
import { act } from "react-dom/test-utils";
import  MOCK_DATA from "../mocks/mockRestroListData.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"

 
global.fetch=jest.fn(()=>{
    return Promise.resolve({
        json:()=>{
            return Promise.resolve(MOCK_DATA)
        }
    })
})

it ("should render Body Component with Search Button",async()=>{


    await act(async()=> 
        
        render(
        <BrowserRouter><Body /></BrowserRouter>)
)

const searchBtn=screen.getByRole("button",{name:"Search"})

const searchInputbox=screen.getByTestId("searchInputbox")

fireEvent.change(searchInputbox,{target:{value:"cafe"}});
fireEvent.click(searchBtn);

const cards=screen.getAllByTestId("rescard");

expect(cards.length).toBe(1);
    
})



it ("should filtered Top Rated Restaurent",async()=>{


    await act(async()=> 
        
        render(
        <BrowserRouter><Body /></BrowserRouter>))

        const cardsBeforeFilter=screen.getAllByTestId("rescard");
        expect(cardsBeforeFilter.length).toBe(10);

        const TopRatedBtn=screen.getByRole("button",{name:"Top Rated"})
        fireEvent.click(TopRatedBtn);

        const cardsAfterFilter=screen.getAllByTestId("rescard");
        expect(cardsAfterFilter.length).toBe(3);


       
    
})