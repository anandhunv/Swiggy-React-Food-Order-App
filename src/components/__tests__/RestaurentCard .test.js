import { render, screen } from "@testing-library/react";
import RestaurentCard from "../RestaurentCard ";
import  MOCK_DATA from "../mocks/restCardMock.json";

import  "@testing-library/jest-dom";


it("should render RestaurentCard component with props data",()=>{
    

    render(<RestaurentCard  resData={MOCK_DATA}/>)

    const name= screen.getByText("Puliyogare Point")

    expect(name).toBeInTheDocument()
})