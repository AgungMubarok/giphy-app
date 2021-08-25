import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import LandingPage from "../pages/landing-page/LandingPage";
import GiphyIron from "../pages/search-list/IronGiphy";
import ListGifPage from "../pages/search-list/ListGifPage";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route path="/search-giphy" component={ListGifPage} />
      <Route path="/iron-man-giphy" component={GiphyIron} />
    </Switch>
  </BrowserRouter>
);

export default Router;