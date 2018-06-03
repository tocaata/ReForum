import React, { Component } from 'react';
import classnames from 'classnames';
import Moment from 'moment';
import styles from './MessageList.css';
import MessageBox from './MessageBox';
import ThuMessage from './ThuMessage';
import Message from 'Libs/Message';


class MessageList extends Component {
  render() {
    const {messages, handleVisit, deletingMessage, deleteMessage} = this.props;

    return (
      <div>
        <div className={styles.header}>
          <span className={styles.title}>Messages</span>
        </div>
        { messages && messages.map((message, index) =>
            <ThuMessage message={message} handleVisit={handleVisit} deletingMessage={deletingMessage} deleteMessage={deleteMessage} key={index}/>
          )
        }
      </div>
    );
  }
}

MessageList.defaultProps = {
  messages: [Message.defaultProps],
  deletingMessage: null,
  handleVisit: () => {},
  deleteMessage: () => {},
};

MessageList.propTypes = {
  messages: React.PropTypes.arrayOf(React.PropTypes.shape(Message.propTypes)),
  deletingMessage: React.PropTypes.any,
  handleVisit: React.PropTypes.func,
  deleteMessage: React.PropTypes.func,
};

export default MessageList;