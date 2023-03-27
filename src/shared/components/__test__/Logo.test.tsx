import {logRoles, render,screen} from "@testing-library/react"
import Logo from "../Logo"

describe("Logo Component",()=>{
    it("renders text",()=>{
        render(<Logo/>);

        const textElement=screen.getByText(/Event/i);
        const text2Element=screen.getByText(/Expo/i);
        
        expect(textElement).toBeInTheDocument()
        expect(text2Element).toBeInTheDocument()
    })
})