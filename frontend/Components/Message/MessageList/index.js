import React, { Component } from 'react';
import classnames from 'classnames';
import Moment from 'moment';
import styles from './styles';
import MessageBox from './MessageBox';

class MessageList extends Component {
  render() {
    let { messages } = this.props.messages;
    return (
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.title}>Messages</span>
        </div>
        { messages && messages.map((message) =>
            <MessageBox content={message.content} discussion={message.discussion} />
          )
        }
      </div>
    );
  }
}

MessageList.defaultProps = {
  messages: {},
};

MessageList.propTypes = {
  messages: React.PropTypes.object,
};

export default MessageList;