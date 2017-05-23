import './Header.scss';

import React from 'react';
import { render } from 'react-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

export default class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    
    return (
      <div className="header-wrapper">
        <Navbar fixedTop={true}>
          <Navbar.Header>
            <Navbar.Brand className="brand-wrap">
              <a href="#"><div className="brand-logo" /></a>
              <div className="subtext">
                Australia's #1 site to hire tradespeople
              </div>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
        </Navbar>
      </div>
    );
  }
}
