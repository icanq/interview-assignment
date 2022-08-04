import { render, screen } from "@testing-library/react";
import App from "./App";

// Tes 0: render header
test("should render header", () => {
  render(<App />);
  const linkElement = screen.getByText(/Pekerjaan Rumah Yang Perlu Dilakukan/i);
  expect(linkElement).toBeInTheDocument();
});

// tes 1: should render input for creating new task
it("should render input for creating new task", () => {
  render(<App />);
  const inputElement = screen.getByPlaceholderText(
    /Masukan nama tugas yang perlu dilakukan .../i
  );
  expect(inputElement).toBeInTheDocument();
});
