import './JobBoard.scss';

import React from 'react';
import { render } from 'react-dom';
import { Nav, NavItem } from 'react-bootstrap';

import data from './jobs.json';
import CardWrapper from '../CardWrapper/CardWrapper.jsx';

export default class JobBoard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'open'
    };
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(selectedKey) {
    if(selectedKey == 1) {
      this.setState({selectedTab: 'open'});
    } else {
      this.setState({selectedTab: 'closed'});
    }
  }

  render() {
    var selectedTab = this.state.selectedTab;
    
    return (
      <div className="container dashboard">
        <Nav bsStyle="pills" activeKey={selectedTab == 'open' ? 1 : 2} onSelect={this.handleSelect}>
          <NavItem eventKey={1} className="col-md-3 col-sm-4 col-xs-6 col-md-offset-3 col-sm-offset-2">Open Jobs</NavItem>
          <NavItem eventKey={2} className="col-md-3 col-sm-4 col-xs-6 col-md-offset-3 col-sm-offset-2">Closed Jobs</NavItem>
        </Nav>
        <CardWrapper data={{data}} selectedTab={{selectedTab}} />
      </div>
    );
  }
}
