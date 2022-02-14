import App from "./App";
import { render, screen } from "@testing-library/react";

test("renders <App/>", () => {
  render(<App />);

  const category = screen.getByText("Category");
  expect(category).toBeInTheDocument();

  const order = screen.getByText("Order");
  expect(order).toBeInTheDocument();

  const date = screen.getByText("Date");
  expect(date).toBeInTheDocument();
});
