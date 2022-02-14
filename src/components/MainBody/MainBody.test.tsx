import React from "react";
import { MainBody } from "./MainBody";
import { BrowserRouter } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { render, screen } from "@testing-library/react";

describe("renders <MainBody/>", () => {
  var obtainedData: Array<any>,
    error: string,
    loading: boolean,
    template: string,
    searchWords: string,
    results: Array<any>;

  error = searchWords = "";
  loading = false;
  template = "All";

  obtainedData = [
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

  results = [];

  it("displays all templates", () => {
    render(
      <BrowserRouter>
        <UserContext.Provider
          value={{
            obtainedData,
            error,
            loading,
            template,
            searchWords,
            results,
          }}
        >
          <MainBody />
        </UserContext.Provider>
      </BrowserRouter>
    );

    const firstTemplate = screen.getByText("Blood donation form template");
    expect(firstTemplate).toBeInTheDocument();

    const secondTemplate = screen.getByText("Scholarship form template");
    expect(secondTemplate).toBeInTheDocument();

    const thirdTemplate = screen.getByText("Marketing form template");
    expect(thirdTemplate).toBeInTheDocument();

    const templateCategory = screen.getByText("All templates");
    expect(templateCategory).toBeInTheDocument();

    const numberOftemplates = screen.getByText("3 templates");
    expect(numberOftemplates).toBeInTheDocument();

    const pagination = screen.getByText("of 1");
    expect(pagination).toBeInTheDocument();
  });

  it("displays searched templates", () => {
    searchWords = "blood";

    results = [
      {
        name: "Blood donation form template",
        created: "2020-11-01T16:26:44.666569",
        category: ["Health"],
        description: "Testing template",
        link: "",
      },
      {
        name: "Another blood donation form template",
        created: "2020-11-01T16:26:44.666569",
        category: ["Health"],
        description: "Testing template",
        link: "",
      },
    ];

    render(
      <BrowserRouter>
        <UserContext.Provider
          value={{
            obtainedData,
            error,
            loading,
            template,
            searchWords,
            results,
          }}
        >
          <MainBody />
        </UserContext.Provider>
      </BrowserRouter>
    );

    const searchedTemplate = screen.getByText("Blood donation form template");
    expect(searchedTemplate).toBeInTheDocument();

    const anotherTemplate = screen.queryByText("Scholarship form template");
    expect(anotherTemplate).not.toBeInTheDocument();

    const numberOftemplates = screen.getByText("2 templates");
    expect(numberOftemplates).toBeInTheDocument();

    const pagination = screen.getByText("of 1");
    expect(pagination).toBeInTheDocument();
  });

  it("displays no result", () => {
    searchWords = "blood";

    results = [];

    render(
      <BrowserRouter>
        <UserContext.Provider
          value={{
            obtainedData,
            error,
            loading,
            template,
            searchWords,
            results,
          }}
        >
          <MainBody />
        </UserContext.Provider>
      </BrowserRouter>
    );

    const noResult = screen.getByText("No result found");
    expect(noResult).toBeInTheDocument();

    const firstTemplate = screen.queryByText("Scholarship form template");
    expect(firstTemplate).not.toBeInTheDocument();
  });

  it("loads the component", () => {
    loading = true;
    template = "";
    obtainedData = results = [];

    render(
      <BrowserRouter>
        <UserContext.Provider
          value={{
            obtainedData,
            error,
            loading,
            template,
            searchWords,
            results,
          }}
        >
          <MainBody />
        </UserContext.Provider>
      </BrowserRouter>
    );

    const loader = screen.getByText("Loading templates...");
    expect(loader).toBeInTheDocument();

    const numberOftemplates = screen.getByText("No template");
    expect(numberOftemplates).toBeInTheDocument();

    const pagination = screen.getByText("of 0");
    expect(pagination).toBeInTheDocument();
  });

  it("displays error", () => {
    error = "Something went wrong...";

    render(
      <BrowserRouter>
        <UserContext.Provider
          value={{
            obtainedData,
            error,
            loading,
            template,
            searchWords,
            results,
          }}
        >
          <MainBody />
        </UserContext.Provider>
      </BrowserRouter>
    );

    const errorText = screen.getByText("Something went wrong...");
    expect(errorText).toBeInTheDocument();
  });

  it("displays no template", () => {
    obtainedData = [];
    error = "";
    loading = false;
    searchWords = "";

    render(
      <BrowserRouter>
        <UserContext.Provider
          value={{
            obtainedData,
            error,
            loading,
            template,
            searchWords,
            results,
          }}
        >
          <MainBody />
        </UserContext.Provider>
      </BrowserRouter>
    );

    const noTemplate = screen.getByText("No template to be displayed");
    expect(noTemplate).toBeInTheDocument();
  });
});
