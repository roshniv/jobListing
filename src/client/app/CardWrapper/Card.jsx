import './Card.scss';

import React from 'react';
import { render } from 'react-dom';

export default class Card extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      dataObj: {},
      key: 0
    };
    this.formatDate = this.formatDate.bind(this);
    this.getConnectedBusinesses = this.getConnectedBusinesses.bind(this);
  }

  componentWillMount() {
    if (this.props.dataObj) {
      this.setState({dataObj: this.props.dataObj});
    }

    if(this.props.key) {
      this.setState({key: this.props.key});
    }
  }

  formatDate(date) {
    //date is in 2017-04-13 format --- Output will be 13th April 2017
    var d = new Date(date);
    var dd = d.getDate();
    var nth = 'th';
    var mm = "January,February,March,April,May,June,July,August,September,October,November,December".split(",")[d.getMonth()];
    if(dd>3 && dd<21) {
      nth = 'th';
    } else if (dd % 10 == 1) {
      nth = 'st';
    } else if (dd % 10 == 2) {
      nth = 'nd';
    } else if (dd % 10 == 3) {
      nth = 'rd';
    } else {
      nth = 'th';
    }
    return dd + nth + " " + mm + " " + d.getFullYear();
  }

  getConnectedBusinesses() {
    var dataObj = this.state.dataObj;
    if (dataObj.connectedBusinesses == null) {
      return (<div className="subtitle"> Connecting you with businesses</div>);
    } else {
      return (
        <div className="business-wrapper">
          {dataObj.connectedBusinesses.map(function(object, i){
            if(object.isHired) {
              return (<div key={i} className="business">
                <img src={object.thumbnail}></img>
                <span className="hired">HIRED</span>
              </div>);
            } else {
              return (<div key={i} className="business">
                <img src={object.thumbnail}></img>
              </div>);
            }
          })}
        </div>
        )
    }
  }

  render() {
    var dataObj = this.state.dataObj;
    var jobId = dataObj.jobId;

    return (
      <div className="card">
        <h4 className="title">{dataObj.category}</h4>
        <div className="subtitle">{'Posted On ' + this.formatDate(dataObj.postedDate)}</div>
        <div className="separator">
          <span className="status">{dataObj.status}</span>
        </div>
        {this.getConnectedBusinesses()}
        <div className="details-link">
          <a href={dataObj.detailsLink} target="_blank">View Details</a>
        </div>
      </div>
    );
  }
}
