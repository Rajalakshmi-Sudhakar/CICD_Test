import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App.js";

describe("test suit for toggle mode cases", () => {
  test("inital home screen Bgcolor test", () => {
    render(<App />);

    const mainDiv = screen.getByTestId("main-div");
    expect(mainDiv).toHaveStyle("background-color:grey");
  });
  test("Button text", () => {
    render(<App />);
    const mainDiv = screen.getByTestId("main-div");
    const button = screen.getByRole("button", { name: /toggle mode/i });
    expect(button).toHaveTextContent("Toggle Mode");

    expect(mainDiv).toHaveStyle("background-color:grey");
    fireEvent.click(button);
    expect(mainDiv).toHaveStyle("background-color:black");
    fireEvent.click(button);
    expect(mainDiv).toHaveStyle("background-color:grey");
  });
});
