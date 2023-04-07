import React from "react";
import { Routes, Route } from "react-router";
import Page from "./Page";

const Router = () => {
  return (
    <Routes>
      <Route exact path="/" element={Page} />
      {/* <Route path="/login" component={About} />
      <Route path="/admin" component={Car} /> */}
    </Routes>
  );
};

export default Router;
