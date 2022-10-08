import { render, screen } from "@testing-library/react";

import App from "./App";

test("renders My Projects title", () => {
  render(<App />);
  const linkElement = screen.getByText(/My Projects/i);
  expect(linkElement).toBeInTheDocument();
});
