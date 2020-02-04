import React from "react";
import { Switch, Route } from "react-router-dom";
import Homepage from "./components/Homepage/homepage";
import About from "./components/About/about";
import EventsPage from "./components/EventsPage/eventsPage";
import ContactPage from "./components/ContactPage/contactpage";

export default (
  <Switch>
    <Route path="/contactus" component={ContactPage} />
    <Route path="/events/:id" component={EventsPage} />
    <Route path="/about" component={About} />
    <Route exact path="/" component={Homepage} />
  </Switch>
);
