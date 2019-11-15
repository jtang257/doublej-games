// build the react server
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import axios from 'axios';

// build the app components
import BingoCard from './components/BingoCard/BingoCard.js';
import BingoDisplay from './components/BingoDisplay/BingoDisplay.js';
import Landing from './components/Landing/Landing.js';


class App extends React.Component {



  render() {
    return(
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component ={Landing} />
          <Route path="/card" exact component={BingoCard} />
          <Route path="/display" exact component={BingoDisplay} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
