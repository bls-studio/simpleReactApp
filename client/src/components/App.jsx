import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import CompanyHeader from "../components/CompanyHeader/index.jsx";
import Navigation from '../components/Navigation'
import CompanyFooter from "../components/CompanyFooter/index.jsx";
import NavTab from '../components/NavTabs';

import routes from '../routes';

class App extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div>
        <CompanyHeader/>
        <Navigation />
        <NavTab/>
        <Switch>
          {routes.map(route => (
            <Route key={`route-${route.name}`} {...route} />
          ))}
        </Switch>
        <CompanyFooter/>
      </div>

    );
  }
}

export default App;