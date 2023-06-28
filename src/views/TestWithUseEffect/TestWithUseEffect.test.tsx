//init for testing
import { act, render } from "@testing-library/react";
import TestWithUseEffect from "./TestWithUseEffect.view.tsx";
import { MemoryRouter } from "react-router-dom";
// tests
describe("test TestWithUseEffect component", () => {
  
    test("render default page", async () => {
        //setup
        act(() => { });

        let component = render(<MemoryRouter><TestWithUseEffect /></MemoryRouter>);
 
        let button = component.getByRole("button")

        component.debug()
        // You can use const {debug} = render(<DefaultPage/>); debug() instead
        // first render

        expect(button.innerHTML).toBe("count is 1");
    });
});
