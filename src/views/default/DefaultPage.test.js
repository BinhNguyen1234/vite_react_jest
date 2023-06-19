//init for testing 
import DefaultPage from "./DefaultPage.view.tsx";
import { render, screen, getByText, prettyDOM} from "@testing-library/react";
import  user  from "@testing-library/user-event"
// tests
describe('test DefaultPage component',()=>{
    test('render default page', async ()=>{
        //setup
        const component = render(<DefaultPage/>);
    
        // console.log(prettyDOM(component.baseElement)) // You can use const {debug} = render(<DefaultPage/>); debug() instead
    
        // first render
        const buttonCount = component.getByRole('button')
        expect(buttonCount.innerHTML).toBe('count is 0')
        // after click
        await user.click(buttonCount);
        await user.click(buttonCount);
        expect(buttonCount.innerHTML).toBe('count is 2')
    })
})