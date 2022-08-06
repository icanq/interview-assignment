import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

// Tes 0: render header
test("should render header", () => {
  render(<App />);
  const textElement = screen.getByText("Pekerjaan Rumah Yang Perlu Dilakukan");
  expect(textElement).toBeInTheDocument();
});

describe("Creating a new task", () => {
  // tes 1: should render input for creating new task
  it("should render input", () => {
    render(<App />);
    const inputElement = screen.getByPlaceholderText(
      /Masukan nama tugas yang perlu dilakukan .../i
    );

    expect(inputElement).toBeInTheDocument();
  });

  // tes 2: should render input for handling submit
  it("should render button tambah", () => {
    render(<App />);
    const buttonTambah = screen.getByRole("button", { name: /Tambah/i });

    expect(buttonTambah).toBeInTheDocument();
  });

  // tes 3: should be able to type in input
  it("should be able to type in input", () => {
    render(<App />);
    // Mendapatkan input berdasarkan placeholder
    const inputElement = screen.getByPlaceholderText(
      /Masukan nama tugas yang perlu dilakukan .../i
    );

    // Setelah berhasil dapet input, ketik sesuatu ke input tersebut
    fireEvent.change(inputElement, { target: { value: "Bersihin Kamar" } });
    expect(inputElement.value).toBe("Bersihin Kamar");
  });

  // tes 4: value of the input should be an empty string after cliked button tambah
  it("value of the input should be an empty string after cliked button tambah", () => {
    render(<App />);
    // Mendapatkan input berdasarkan placeholder
    const inputElement = screen.getByPlaceholderText(
      /Masukan nama tugas yang perlu dilakukan .../i
    );

    // Setelah berhasil dapet inputelement, ketik sesuatu ke input tersebut
    fireEvent.change(inputElement, { target: { value: "Bersihin Kamar" } });

    // mendapatkan tombol dengan tulisan tambah
    const buttonTambah = screen.getByRole("button", { name: /Tambah/i });
    // mengklik tombol tambah
    fireEvent.click(buttonTambah);
    // value dari input harus "" setelah diklik tombol tambah
    expect(inputElement.value).toBe("");
  });
});
