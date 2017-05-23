import React from 'react';
import {render} from 'react-dom';

import Header from './Header/Header.jsx';
import JobBoard from './JobBoard/JobBoard.jsx';

class App extends React.Component {
  render () {
    return (
      <div>
      	<Header />
        <p> Hello React!</p>
        <JobBoard />
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));