/* eslint-disable testing-library/no-render-in-setup */
/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-debugging-utils */
import { render, screen, cleanup } from "@testing-library/react"
import App from "./App";

beforeAll(()=>{
    console.log("before All");
});

beforeEach(()=>{
    render(<App />);
    console.log("sa");
});

afterAll(()=>{
    console.log("After All");
});

afterEach(()=>{
    console.log("After each");
    cleanup();
});

test('Header renders correctly', () => {
    
    const headerEl = screen.getByText(/fatih özcan/i);
    expect(headerEl).toBeInTheDocument();
    expect(headerEl).toHaveTextContent("Fatih Özcan")

   
});

test('Disabled Button Test', ()=>{

    const buttonEl = screen.getByTestId("btnDisabled")
    expect(buttonEl).toHaveTextContent("Disabled");
    expect(buttonEl).toBeDisabled();
})

test('Enabled Button Test', ()=>{

    const buttonEl = screen.getByTestId("btnEnabled")
    expect(buttonEl).toHaveTextContent("Enabled");
    expect(buttonEl).toBeEnabled();
})

test('Green Element Renders Correctly', () => {
    const greenElement = screen.getByText(/benim rengim yeşil/i);

    expect(greenElement).toBeInTheDocument();
    expect(greenElement).toHaveTextContent("Benim rengim yeşil")
    expect(greenElement).toHaveClass("green")
})