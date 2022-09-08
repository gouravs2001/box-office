import React from 'react';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Switch>
      <Route exact path="/">
        Homepage
      </Route>
      <Route exact path="/starred">
        Starred
      </Route>
      <Route>Error 404</Route>
    </Switch>
  );
}

export default App;
