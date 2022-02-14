import React from "react";
import { RouterComponent } from "./index";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { render, screen } from "@testing-library/react";

beforeAll(() => server.listen());
afterAll(() => server.close());

const fakeUserResponse: Array<any> = [
  {
    name: "Blood donation form template",
    created: "2020-11-04T16:26:44.666569",
    category: ["Health"],
    description: "Testing template",
    link: "",
  },
];
const server = setupServer(
  rest.get(`${process.env.REACT_APP_API}`, (req, res, ctx) => {
    return res(ctx.json(fakeUserResponse));
  })
);

it("displays index component", async () => {
  render(<RouterComponent />);
  const loader = screen.getByText("Loading templates...");
  expect(loader).toBeInTheDocument();
});
