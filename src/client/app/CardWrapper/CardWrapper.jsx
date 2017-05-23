import './CardWrapper.scss';

import React from 'react';
import { render } from 'react-dom';

export default class CardWrapper extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'open',
      data: []
    };
    //this.handleSelect = this.handleSelect.bind(this);
  }

  componentWillMount() {
    if (this.props.selectedTab) {
      this.setState({selectedTab: this.props.selectedTab});
    }

    if(this.props.data) {
      this.setState({data: this.props.data});
    }
  }

  /*handleSelect(selectedKey) {
    //alert('selected ' + selectedKey);
    if(selectedKey == 1) {
      this.setState({selectedTab: 'open'});
    } else {
      this.setState({selectedTab: 'closed'});
    }
  }*/

  render() {
    return (
      <div className="card-wrapper">
        
      </div>
    );
  }
}
