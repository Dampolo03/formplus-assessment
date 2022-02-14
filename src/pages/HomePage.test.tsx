import React from "react";
import { HomePage } from "./HomePage";
import { BrowserRouter } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { render, screen } from "@testing-library/react";

it("renders <HomePage/>", () => {
  var setObtainedData: () => void,
    setTemplate: () => void,
    setSearchWords: () => void,
    setResults: () => void;

  setObtainedData = setTemplate = setSearchWords = setResults = jest.fn();

  var obtainedData: Array<any>, unchangedData: Array<any>, results: Array<any>;

  obtainedData =
    unchangedData =
    results =
      [
        {
          name: "Blood donation form template",
          created: "2020-11-04T16:26:44.666569",
          category: ["Health"],
          description: "Testing template",
          link: "",
        },
      ];

  const searchWords: string = "";
  const template: string = "All";
  const error: string = "";
  const loading: boolean = false;

  render(
    <BrowserRouter>
      <UserContext.Provider
        value={{
          obtainedData,
          error,
          loading,
          template,
          results,
          unchangedData,
          searchWords,
          setObtainedData,
          setTemplate,
          setSearchWords,
          setResults,
        }}
      >
        <HomePage />
      </UserContext.Provider>
    </BrowserRouter>
  );

  const templateName = screen.getByText("Blood donation form template");
  expect(templateName).toBeInTheDocument();
});
