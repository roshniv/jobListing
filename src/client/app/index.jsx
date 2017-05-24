import React from 'react';
import {render} from 'react-dom';

import Header from './Header/Header.jsx';
import JobBoard from './JobBoard/JobBoard.jsx';
import Footer from './Footer/Footer.jsx';

class App extends React.Component {
  render () {
    return (
      <div>
      	<Header />
        <JobBoard />
        <Footer />
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));