import './Footer.scss';
import React from 'react';

export default class Footer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <footer className="footer-wrapper">
        <div className="container-fluid">
          <p className="copyrightContent">hipages.com.au &copy; 2017</p>
          <table>
            <tbody>
              <tr>
                <td>Customer Support</td>
                <td>Terms & Conditions</td>
              </tr>
              <tr>
                <td>Privacy Policy</td>
                <td>Site map</td>
              </tr>
            </tbody>
          </table>
        </div>
      </footer>
    );
  }
}
