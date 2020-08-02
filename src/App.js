import React from 'react';
import GlobalStyle from './App.style';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Player from './components/containers/Player';


function App() {
  return (
    <BrowserRouter basename='/react-tube/'>
      <>
        <Switch>
          <Route exact path='/' component={Player} />
          <Route exact path="/:activeVideo" component={Player}/>
        </Switch>
        <GlobalStyle/>
      </>
    </BrowserRouter>
  );
}

export default App;
