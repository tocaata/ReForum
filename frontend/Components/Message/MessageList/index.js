import React, { Component } from 'react';
import classnames from 'classnames';
import Moment from 'moment';
import styles from './styles';
import MessageBox from './MessageBox';

class MessageList extends Component {
  render() {
    let { messages } = this.props;
    return (
      <div>
        { messages && messages.map((message) =>
            <MessageBox content={this.props.messages.content} discussion={this.props.messages.discussion} />
          )
        }
      </div>
    );
  }
}