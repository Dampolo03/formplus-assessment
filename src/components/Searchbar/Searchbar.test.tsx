import React from "react";
import { Searchbar } from "./Searchbar";
import { fireEvent, render, screen } from "@testing-library/react";

it("renders <Searchbar/>", () => {
  const searchWords = "";
  const onChange = jest.fn();

  render(<Searchbar searchWords={searchWords} onChange={onChange} />);

  const searchbar = screen.getByPlaceholderText("Search Templates");
  fireEvent.change(searchbar, { target: { value: "test" } });
  expect(onChange).toHaveBeenCalled();
});
