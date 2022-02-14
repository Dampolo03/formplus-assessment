import React from "react";
import { Header } from "./Header";
import { BrowserRouter } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { fireEvent, render, screen } from "@testing-library/react";

describe("renders <Header/>", () => {
  var setObtainedData: () => void,
    setTemplate: () => void,
    setSearchWords: () => void,
    setResults: () => void;

  var obtainedData: Array<any>, unchangedData: Array<any>;

  const searchWords: string = "";

  setObtainedData = setTemplate = setSearchWords = setResults = jest.fn();

  obtainedData = unchangedData = [
    {
      name: "Blood donation form template",
      created: "2020-11-01T16:26:44.666569",
      category: ["Health"],
      description: "Testing template",
      link: "",
    },
    {
      name: "Scholarship form template",
      created: "2020-12-02T16:26:44.666569",
      category: ["Education"],
      description: "Sample scholarship template",
      link: "https://formpl.us",
    },
    {
      name: "Marketing form template",
      created: "2020-12-03T16:26:44.666569",
      category: ["E-commerce"],
      description: "Sample scholarship template",
      link: "https://formpl.us",
    },
  ];

  const component = (
    <BrowserRouter>
      <UserContext.Provider
        value={{
          obtainedData,
          unchangedData,
          searchWords,
          setObtainedData,
          setTemplate,
          setSearchWords,
          setResults,
        }}
      >
        <Header />
      </UserContext.Provider>
    </BrowserRouter>
  );

  it("displays info", () => {
    const HeaderComponent = render(component);

    const info = HeaderComponent.container.querySelector(".info");
    expect(info).toHaveTextContent("Tada! Get started with a free template.");
  });

  it("selects category options", () => {
    const HeaderComponent = render(component);

    const selectCategory: any =
      HeaderComponent.container.querySelector("#Category");
    fireEvent.change(selectCategory, { target: { value: "All" } });
    expect(setSearchWords).toHaveBeenCalled();
    expect(setResults).toHaveBeenCalled();
    expect(setTemplate).toHaveBeenCalledWith("All");
    expect(setObtainedData).toHaveBeenCalledWith(unchangedData);

    fireEvent.change(selectCategory, { target: { value: "Education" } });
    expect(setObtainedData).toHaveBeenCalled();
    expect(setTemplate).toHaveBeenCalledWith("Education");

    fireEvent.change(selectCategory, { target: { value: "E-commerce" } });
    expect(setTemplate).toHaveBeenCalledWith("E-commerce");

    fireEvent.change(selectCategory, { target: { value: "Health" } });
    expect(setTemplate).toHaveBeenCalledWith("Health");
  });

  it("selects order options", () => {
    const HeaderComponent = render(component);

    const selectOrder: any = HeaderComponent.container.querySelector("#Order");
    fireEvent.change(selectOrder, { target: { value: "default" } });
    expect(setObtainedData).toHaveBeenCalledWith(obtainedData);

    fireEvent.change(selectOrder, { target: { value: "ascending" } });
    expect(setObtainedData).toHaveBeenCalled();

    fireEvent.change(selectOrder, { target: { value: "descending" } });
    expect(setObtainedData).toHaveBeenCalled();
  });

  it("selects date options", () => {
    const HeaderComponent = render(component);

    const selectDate: any = HeaderComponent.container.querySelector("#Date");
    fireEvent.change(selectDate, { target: { value: "default" } });
    expect(setObtainedData).toHaveBeenCalledWith(obtainedData);

    fireEvent.change(selectDate, { target: { value: "ascending" } });
    expect(setObtainedData).toHaveBeenCalled();

    fireEvent.change(selectDate, { target: { value: "descending" } });
    expect(setObtainedData).toHaveBeenCalled();
  });

  it("searches for templates", () => {
    render(component);

    const searchBar = screen.getByPlaceholderText("Search Templates");
    fireEvent.change(searchBar, { target: { value: "test" } });
    expect(setSearchWords).toHaveBeenCalled();
    expect(setResults).toHaveBeenCalled();
  });
});
