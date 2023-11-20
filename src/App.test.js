import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  // Get link by text
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  // Expect link to be in the document
  expect(linkElement).toBeInTheDocument();
});
