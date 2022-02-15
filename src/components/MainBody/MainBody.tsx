import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserContext";
import { Pagination } from "../Pagination/Pagination";
import { PlaceholderCards } from "../PlaceholderCards/PlaceholderCards";
import { TemplateCard } from "../TemplateCard/TemplateCard";

export const MainBody = () => {
  const { obtainedData, error, loading, template, searchWords, results } =
    useContext(UserContext);

  const [templateCount, setTemplateCount] = useState<number | string>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [templatesPerPage] = useState<number>(15);

  useEffect(() => {
    if (results.length) {
      setTemplateCount(results.length);
    } else if (!results.length && searchWords) {
      setTemplateCount(0);
    } else {
      setTemplateCount(obtainedData.length);
    }
  }, [obtainedData, results]);

  const indexOfLastTemplate = currentPage * templatesPerPage;
  const indexOfFirstTemplate = indexOfLastTemplate - templatesPerPage;

  const currentTemplates = [...obtainedData].slice(
    indexOfFirstTemplate,
    indexOfLastTemplate
  );

  const currentResultsTemplates = [...results].slice(
    indexOfFirstTemplate,
    indexOfLastTemplate
  );

  const paginate = (pageNumber: any) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="main-container">
      <div className="main-body-headers">
        <h5>{template ? `${template} templates` : "Loading templates..."}</h5>
        <h5>
          {templateCount === 0 ? "No template" : `${templateCount} templates`}
        </h5>
      </div>
      <div>
        <main className="main-body">
          {error ? (
            <div className="loading-error">{error}</div>
          ) : loading ? (
            <PlaceholderCards />
          ) : searchWords ? (
            results?.length ? (
              currentResultsTemplates?.map((each: any) => (
                <React.Fragment key={each.created + Math.random()}>
                  <TemplateCard
                    name={each.name}
                    date={each.created}
                    categories={each.category}
                  />
                </React.Fragment>
              ))
            ) : (
              <div className="empty-template">No result found</div>
            )
          ) : obtainedData?.length ? (
            currentTemplates?.map((each: any) => (
              <React.Fragment key={each.created + Math.random()}>
                <TemplateCard
                  name={each.name}
                  date={each.created}
                  categories={each.category}
                />
              </React.Fragment>
            ))
          ) : (
            <div className="empty-template">No template to be displayed</div>
          )}
        </main>
        {searchWords ? (
          <Pagination
            templatesPerPage={templatesPerPage}
            totalTemplates={[...results]?.length}
            paginate={paginate}
            currentPage={currentPage}
            data={[...results]}
          />
        ) : (
          <Pagination
            templatesPerPage={templatesPerPage}
            totalTemplates={[...obtainedData]?.length}
            paginate={paginate}
            currentPage={currentPage}
            data={[...obtainedData]}
          />
        )}
      </div>
    </div>
  );
};
