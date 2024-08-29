import { fireEvent, render, screen } from "@testing-library/react"
import { act } from "react-dom/test-utils"
import RestaurantMenu from "../RestaurantMenu"
import MOCK_DATA from  "../mocks/restaurantMenuMock.json"
import { Provider } from "react-redux"
import Cart from "../Cart"
import Header from "../Header"
import appStore from "../../utils/appStore"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"


global.fetch=jest.fn(()=>{
    return Promise.resolve({
        json:()=>Promise.resolve(MOCK_DATA)
    })
})

it("should load restaurent MENU component",async()=>{

    await act(async()=>render(
        <BrowserRouter>
            <Provider store={appStore}>

                <Header/>
                <RestaurantMenu />
                <Cart/>

             </Provider>
        </BrowserRouter>
     ))


    const accordianceHeader= screen.getByText("Recommended(14)")

    fireEvent.click(accordianceHeader)

    const foodItems =screen.getAllByTestId('fooditems');
    expect(foodItems.length).toBe(14);

    const addBtns=screen.getAllByRole("button",{name:"ADD +"})

    fireEvent.click(addBtns[0]);

    const cart=screen.getByText("Cart (1 items)")

    expect(cart).toBeInTheDocument()


    const cartList=screen.getAllByTestId("cartItems")

    expect(cartList.length).toBe(1)


    


})