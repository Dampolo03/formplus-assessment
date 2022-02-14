import React from "react";
import { PlaceholderCards } from "./PlaceholderCards";
import { render } from "@testing-library/react";

it("renders <PlaceholderCards/>", () => {
  const PlaceholderComponent = render(<PlaceholderCards />);

  const placeholders =
    PlaceholderComponent.container.querySelectorAll(".card-placeholder");
  expect(placeholders).toBeTruthy();
});
