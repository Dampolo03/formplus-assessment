import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { HomePage } from "../pages/HomePage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { fetchData } from "../redux/allSlices";
import paths from "./paths";

export const RouterComponent = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData(undefined));
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
