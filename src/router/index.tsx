import React, { useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";
import { HomePage } from "../pages/HomePage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import paths from "./paths";

export const RouterComponent = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [obtainedData, setObtainedData] = useState<Array<any>>([]);
  const [unchangedData, setUnchangedData] = useState<Array<any>>([]);
  const [error, setError] = useState<string>("");
  const [template, setTemplate] = useState<string>("");
  const [searchWords, setSearchWords] = useState<string>("");
  const [results, setResults] = useState<Array<any>>([]);

  useEffect(() => {
    setLoading(true);
    const fetchAPI = () => {
      fetch(`${process.env.REACT_APP_API}`)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          const newData = [...data];
          const slicedData = [...newData.slice(0, 2000)];
          setObtainedData([...slicedData]);
          setUnchangedData([...slicedData]);
          setTemplate("All");
          setLoading(false);
        })
        .catch(() => {
          setError("Something went wrong...");
          setLoading(false);
        });
    };

    fetchAPI();
  }, []);

  return (
    <Router>
      <UserContext.Provider
        value={{
          obtainedData,
          unchangedData,
          loading,
          error,
          template,
          searchWords,
          results,
          setObtainedData,
          setTemplate,
          setSearchWords,
          setResults,
        }}
      >
        <Switch>
          <Route exact path={paths.root} component={HomePage} />
          <Route exact path={paths.noPage} component={HomePage} />
        </Switch>
      </UserContext.Provider>
    </Router>
  );
};
