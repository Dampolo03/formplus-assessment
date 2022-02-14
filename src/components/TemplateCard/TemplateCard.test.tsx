import React from "react";
import { TemplateCard } from "./TemplateCard";
import { render, screen } from "@testing-library/react";

it("renders <TemplateCard/>", () => {
  const name = "test";
  const categories = ["test 1", "test 2", "test 3"];
  const date = "2020-11-01T16:26:44.666569";

  render(<TemplateCard name={name} categories={categories} date={date} />);

  const cardName = screen.getByText("test");
  expect(cardName).toBeInTheDocument();
});
