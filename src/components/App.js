import React, { Component } from 'react';
import { TopBar } from './TopBar';
import { Main } from './Main';
import nba from 'nba';

window.nba = nba;

class App extends Component {


  render() {
    console.log('render', this.state);
    return (
        <div className="App">
          <TopBar />
          <Main />
        </div>
    );
  }
}

export default App;

