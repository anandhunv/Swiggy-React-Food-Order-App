import { render,screen } from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom";


describe("Should render Contact page",()=>{


  // beforeAll(()=>{
  //   console.log("before all");
  // })

  // beforeEach(()=>{
  //   console.log("before each"+Math.random()+1);
  // })
  // afterAll(()=>{
  //   console.log("after all");
  // })

  // afterEach(()=>{
  //   console.log("after each"+Math.random()+1);
  // })


test("should load contact component",()=>{
    
  //rendering
    render(<Contact/>)
  //Querying
    const heading=screen.getByRole("heading")
  //Assertion 
    expect(heading).toBeInTheDocument();

})

test("should load button",()=>{
    

    render(<Contact/>)
    const button=screen.getByRole("button")
    expect(button).toBeInTheDocument();

})


test("should load buttonName",()=>{
    

    render(<Contact/>)
    const buttonName=screen.getByText("Submit")
    expect(buttonName).toBeInTheDocument();

})

test("should load InputName",()=>{
    

    render(<Contact/>)
    const InputName=screen.getByPlaceholderText("Email")
    expect(InputName).toBeInTheDocument();
})



test("should load all input boxes",()=>{
    

    render(<Contact/>)
    const InputBox=screen.getAllByRole("textbox")
    expect(InputBox.length).toBe(2);
})

})