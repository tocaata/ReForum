import React, { Component } from 'react';
import classnames from 'classnames';
import Moment from 'moment';
import styles from './styles';

class MessageBox extends Component {
  render() {
    return (
      <div style="border: 1px black">
        {this.props.content}
      </div>
    );
  }
}