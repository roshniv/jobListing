import React from 'react';
import Card from './Card.jsx';

export default class CardWrapper extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'open',
      data: []
    };
  }

  componentWillMount() {
    if (this.props.selectedTab) {
      this.setState({selectedTab: this.props.selectedTab});
    }

    if(this.props.data) {
      this.setState({data: this.props.data});
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedTab) {
      this.setState({selectedTab: nextProps.selectedTab});
    }

    if(nextProps.data) {
      this.setState({data: nextProps.data});
    }
  }

  render() {
    let selectedTab = this.state.selectedTab;
    return (
      <div className="container card-wrapper">
        {this.state.data.data.jobs.map(function(object, i){
          if ((selectedTab.selectedTab == 'open' && object.status != 'Closed') || (selectedTab.selectedTab == 'closed' && object.status == 'Closed')) {
            return (<Card dataObj={object} key={i} />);
          } else {
            return (<div key={i}/>);
          }
        })}
      </div>
    );
  }
}
