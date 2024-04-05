import React from "react";
import { ThemeProvider } from "styled-components";
import { render, screen } from "@testing-library/react";
import Footer from "./Footer";
import { ThemeContext } from "../Context/ThemeStore";

describe("Footer", () => {
  test("renders text correctly", () => {
    render(
      <ThemeProvider theme={{}}>
        <Footer />
      </ThemeProvider>
    );
    expect(
      screen.getByText("Drag and drop to reorder list")
    ).toBeInTheDocument();
  });

  test("renders with light theme", () => {
    render(
      <ThemeContext.Provider value={{ theme: "light" }}>
        <ThemeProvider theme={{}}>
          <Footer />
        </ThemeProvider>
      </ThemeContext.Provider>
    );
    expect(screen.getByTestId("footer-box")).toHaveStyleRule(
      "background-color",
      "#ffffff"
    );
    expect(screen.getByTestId("footer-text")).toHaveStyleRule(
      "color",
      "#000000"
    );
  });

  test("renders with dark theme", () => {
    render(
      <ThemeContext.Provider value={{ theme: "dark" }}>
        <ThemeProvider theme={{}}>
          <Footer />
        </ThemeProvider>
      </ThemeContext.Provider>
    );
    expect(screen.getByTestId("footer-box")).toHaveStyleRule(
      "background-color",
      "#000000"
    );
    expect(screen.getByTestId("footer-text")).toHaveStyleRule(
      "color",
      "#ffffff"
    );
  });
});
