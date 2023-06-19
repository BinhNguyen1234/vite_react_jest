//init for testing 
import TestWithUseEffect from "./TestWithUseEffect.view.tsx";
import { act, render } from "@testing-library/react";
// tests
describe("test TestWithUseEffect component",()=>{
    let component = null;
    it('render default page', async ()=>{
        //setup
        act(()=>{

        })
        component = render(<TestWithUseEffect/>).getByRole('button');
        // You can use const {debug} = render(<DefaultPage/>); debug() instead
        // first render
        
        expect(component.innerHTML).toBe('count is 1')
    })
})