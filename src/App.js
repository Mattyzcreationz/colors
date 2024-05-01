import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import ColorList from './colorList';
import ColorDetail from './colorDetail';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/colors" component={ColorList} />
          <Route path="/colors/:color" component={ColorDetail} />
          <Redirect from="*" to="/colors" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
