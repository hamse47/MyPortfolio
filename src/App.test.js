import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders the intro subtitle", () => {
  // Get the subtitle by text
  const { getByText } = render(<App />);
  const subtitleElement = getByText(/i create stuff\./i);
  // Expect the subtitle to be in the document
  expect(subtitleElement).toBeInTheDocument();
});
