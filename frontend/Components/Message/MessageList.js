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
              <ThuMessage message_id={message._id} discussion_slug={message.discussion.discussion_slug} discussion_title={message.discussion.title} discussion_forum={message.discussion.forum.forum_slug}
              date={message.date} userName={message.from.username} userUrl={message.from.github.url} avatarUrl={message.from.avatarUrl} handleVisit={this.props.handleVisit} />
            </MessageBox>
          )
        }
      </div>
    );
  }
}

MessageList.defaultProps = {
  messages: [{
    from: {},
    // type: "thumbsup",
    discussion: {},
    read: false,
    date: "",
  }],
  handleVisit: () => {},
};

MessageList.propTypes = {
  messages: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      from: React.PropTypes.object,
      // type: React.PropTypes.string,
      discussion: React.PropTypes.object,
      read: React.PropTypes.boolean,
      date: React.PropTypes.string,
    })
  ),
  handleVisit: React.PropTypes.func,
};

export default MessageList;