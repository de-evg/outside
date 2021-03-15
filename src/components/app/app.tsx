import * as React from "react";
import * as ReactRouterDom from "react-router-dom";
import MainPage from "../main-page/main-page";

const { BrowserRouter, Switch, Route } = ReactRouterDom;

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" ><MainPage /></Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App;
