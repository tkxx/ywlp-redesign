import React from "react";
import { Switch, Route } from "react-router-dom";
import About from "./components/About/about";
import EventsPage from "./components/EventsPage/eventsPage";
import Homepage from "./components/Homepage/homepage";
import ContactUs from "./components/ContactPage/contactPage";

export default (
  <Switch>
    <Route path="/about" component={About} />
    <Route path="/events/:id" component={EventsPage} />
    <Route path="/contactus" component={ContactUs} />
    <Route exact path="/" component={Homepage} />
  </Switch>
);
