import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

test("landing page loads correctly", () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const heading = screen.getByRole("heading", { level: 1 });
  expect(heading).toBeInTheDocument();

  const welcomePrompt = screen.getByRole("heading", { level: 2 });
  expect(welcomePrompt).toBeInTheDocument();

  const pokeImages = screen.getAllByRole("img");
  expect(pokeImages).toHaveLength(15);
});
