//init for testing 
import DefaultPage from "./DefaultPage.view.tsx";
import { render, screen} from "@testing-library/react";
import  user  from "@testing-library/user-event"
// tests
test('render default page', async ()=>{
    //setup
    render(<DefaultPage/>);
    const buttonCount = await screen.findByRole('button');
    // first render
    expect(buttonCount.innerHTML).toBe('count is 0')

    // after click
    await user.click(buttonCount);
    await user.click(buttonCount);
    expect(buttonCount.innerHTML).toBe('count is 2')
})