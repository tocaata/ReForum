import React, { Component } from 'react';
import classnames from 'classnames';
import Moment from 'moment';
import styles from './styles';
import MessageBox from './MessageBox';

class MessageList extends Component {
  render() {
    return (
      <div>
        { messages && messages.map((message) =>
            <MessageBox/>
          ) 
        }
      </div>
    );
  }
}