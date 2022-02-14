import React from "react";
import { SelectComponent } from "./SelectComponent";
import { fireEvent, render } from "@testing-library/react";

it("renders <SelectComponent/>", () => {
  const value: string = "";
  const label: string = "test";
  const items = [
    { value: "test1", name: "Test 1" },
    { value: "test2", name: "Test 2" },
  ];

  const onChange = jest.fn();
  const Select = render(
    <SelectComponent
      value={value}
      onChange={onChange}
      items={items}
      label={label}
    />
  );

  const select: any = Select.container.querySelector("#test");
  fireEvent.change(select, { target: { value: "test1" } });
  expect(onChange).toHaveBeenCalled();
});
