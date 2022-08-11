/* eslint-disable testing-library/no-render-in-setup */
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import InputValue from "../inputValue";

beforeEach(()=>{
    render(<InputValue />);
});

test('Test Secret Message Is Initially Empty', ()=>{
    const inputEl = screen.getByLabelText(/secret/i);

    expect(inputEl).toHaveValue("");
})

test('Test input change', ()=>{
    const inputEl = screen.getByLabelText(/secret/i);

    expect(inputEl).toHaveValue("");

    userEvent.type(inputEl, "Bu bir deneme mesajıdır");

    expect(inputEl).toHaveValue("Bu bir deneme mesajıdır");
})

test('Initially Checkbox is not checked', ()=>{
const checkEl=screen.getByRole("checkbox")

expect(checkEl).not.toBeChecked();
})

test(' Checkbox works correctly', ()=>{
    const checkEl=screen.getByRole("checkbox")
    
    expect(checkEl).not.toBeChecked();

    userEvent.click(checkEl);

    expect(checkEl).toBeChecked();
})
    