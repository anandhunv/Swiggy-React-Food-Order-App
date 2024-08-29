import { fireEvent, render,screen} from "@testing-library/react"
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"



it("should render header component with a login button",()=>{

    render(
        <BrowserRouter>
        <Provider store={appStore}>
      <Header />
      </Provider>
      </BrowserRouter> 
    )

    // const loginButton= screen.getByRole("button");
    // const loginButton= screen.getByText("Login");
    const loginButton= screen.getByRole("button",{name:"Login"});





    expect(loginButton).toBeInTheDocument();
}) 

it("should render header component with a cart",()=>{

  render(
      <BrowserRouter>
      <Provider store={appStore}>
    <Header />
    </Provider>
    </BrowserRouter> 
  )

 
      const CartItems= screen.getByText("Cart (0 items)");





  expect(CartItems).toBeInTheDocument();
}) 


it("should render header component with a cart",()=>{

  render(
      <BrowserRouter>
      <Provider store={appStore}>
    <Header />
    </Provider>
    </BrowserRouter> 
  )

 
      const Cart= screen.getByText(/Cart/);





  expect(Cart).toBeInTheDocument();
}) 



it("should change Login Button to Logout onclick button header component",()=>{

  render(
      <BrowserRouter>
      <Provider store={appStore}>
    <Header />
    </Provider>
    </BrowserRouter> 
  )

 
  const loginButton= screen.getByRole("button",{name:"Login"});

  fireEvent.click(loginButton);
  
  const logOutButton= screen.getByRole("button",{name:"Logout"});







  expect(logOutButton).toBeInTheDocument();
}) 
