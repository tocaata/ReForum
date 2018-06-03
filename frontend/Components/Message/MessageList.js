import React, { Component } from 'react';
import classnames from 'classnames';
import Moment from 'moment';
import styles from './MessageList.css';
import MessageBox from './MessageBox';
import ThuMessage from './ThuMessage';
import Message from 'Libs/Message';


class MessageList extends Component {
  render() {
    const {messages, handleVisit} = this.props;

    return (
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.title}>Messages</span>
        </div>
        { messages && messages.map((message, index) =>
            <MessageBox key={index}>
              <ThuMessage message={message} handleVisit={handleVisit}/>
            </MessageBox>
          )
        }
      </div>
    );
  }
}

MessageList.defaultProps = {
  messages: [Message.defaultProps],
  handleVisit: () => {},
};

MessageList.propTypes = {
  messages: React.PropTypes.arrayOf(React.PropTypes.shape(Message.propTypes)),
  handleVisit: React.PropTypes.func,
};

export default MessageList;