import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { HomePage } from "../pages/HomePage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  setError,
  setLoadingFalse,
  setLoadingTrue,
  setObtainedData,
  setUnchangedData,
  setTemplate,
} from "../redux/allSlices";
import paths from "./paths";

export const RouterComponent = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchAPI = () => {
      dispatch(setLoadingTrue());
      fetch(`${process.env.REACT_APP_API}`)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          const newData = [...data];
          const slicedData = [...newData.slice(0, 2000)];
          dispatch(setObtainedData({ newData: [...slicedData] }));
          dispatch(setUnchangedData({ newData: [...slicedData] }));
          dispatch(setTemplate({ template: "All" }));
          dispatch(setLoadingFalse());
        })
        .catch((error) => {
          dispatch(setError());
          dispatch(setLoadingFalse());
        });
    };

    fetchAPI();
  }, [dispatch]);

  return (
    <Router>
      <Switch>
        <Route exact path={paths.root} component={HomePage} />
        <Route exact path={paths.noPage} component={HomePage} />
      </Switch>
    </Router>
  );
};
