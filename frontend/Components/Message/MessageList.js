import React, { Component } from 'react';
import classnames from 'classnames';
import Moment from 'moment';
import styles from './MessageList.css';
import MessageBox from './MessageBox';
import ThuMessage from './ThuMessage';

class MessageList extends Component {
  render() {
    const messages = this.props.messages;
    return (
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.title}>Messages</span>
        </div>
        { messages && messages.map((message, index) =>
            <MessageBox key={index} content={message.content} discussion={message.discussion}>
              <ThuMessage content={message.content} date={message.date} avatarUrl={message.from.avatarUrl} userUrl={message.from.github.url}/>
            </MessageBox>
          )
        }
      </div>
    );
  }
}

MessageList.defaultProps = {
  messages: [],
};

MessageList.propTypes = {
  messages: React.PropTypes.array,
};

export default MessageList;