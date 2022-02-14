import React from "react";
import { Pagination } from "./Pagination";
import { fireEvent, render } from "@testing-library/react";

describe("renders <Pagination/>", () => {
  const paginate = jest.fn();
  const templatesPerPage = 1;
  const totalTemplates = 2;
  const currentPage = 1;
  var data: Array<any>;

  it("displays enabled pagination", () => {
    data = [
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
    ];

    const PaginationComponent = render(
      <Pagination
        templatesPerPage={templatesPerPage}
        totalTemplates={totalTemplates}
        currentPage={currentPage}
        paginate={paginate}
        data={data}
      />
    );

    const previous: any = PaginationComponent.container.querySelector(
      ".disabled-pagination"
    );
    expect(previous).toBeInTheDocument();

    const next: any = PaginationComponent.container.querySelector(
      ".enabled-pagination"
    );
    fireEvent.click(next);
    expect(paginate).toBeCalledTimes(1);
  });

  it("displays disabled pagination", () => {
    data = [];

    const PaginationComponent = render(
      <Pagination
        templatesPerPage={templatesPerPage}
        totalTemplates={totalTemplates}
        currentPage={currentPage}
        paginate={paginate}
        data={data}
      />
    );

    const previous: any = PaginationComponent.container.querySelectorAll(
      ".disabled-pagination"
    );
    expect(previous).toBeTruthy();
  });
});
