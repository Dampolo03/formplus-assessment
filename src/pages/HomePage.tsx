import React from "react";
import { Header } from "../components/Header/Header";
import { MainBody } from "../components/MainBody/MainBody";

export const HomePage = () => {
  return (
    <div className="app-container">
      <Header />
      <MainBody />
    </div>
  );
};
