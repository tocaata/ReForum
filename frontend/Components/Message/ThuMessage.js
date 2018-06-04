import React, { Component } from 'react';
import classnames from 'classnames';
import Moment from 'moment';
import Global from 'SharedStyles/globalStyles.css';
import styles from './ThuMessage.css';
import { Link } from 'react-router';
import Message from 'Libs/Message';
import Button from 'Components/Button';

class ThuMessage extends Component {
  visit() {
    this.props.handleVisit(this.props.message.id);
  }

  render() {
    const {
      currentUserId,
      currentUserRole,
      message,
      deleteMessage,
      deletingMessage,
    } = this.props;

    const {from: user} = message;

    let dateDisplay = moment(message.date);
    dateDisplay = dateDisplay.from(moment());

    const allowDelete = true;
    // const allowDelete = (message.to.id === currentUserId) || (currentUserRole === 'admin');

    return (
      <div className={styles.container}>
        <div className={styles.infoContainer}>
          <img className={styles.avatar} src={user.avatarUrl} />
          <div className={styles.userInfo}>
            <Link to={`/user/${user.userName}`} className={styles.name}>{user.userName}</Link>
            <a href={`https://www.github.com/${user.userName}`} target="_blank" className={styles.gitHandler}>
              <i className={classnames('fa fa-github-alt', styles.gitIcon)}></i>
              <span>{user.userName}</span>
            </a>
          </div>
          <div className={styles.dateInfo}>{dateDisplay}</div>
          { allowDelete && <Button className={styles.deleteButton} noUppercase onClick={() => { deleteMessage(message.id); } }>
            <i className={classnames('fa fa-trash', styles.trashIcon)}></i>
            <span>Delete</span>
          </Button> }
          {/* <Button noUppercase>Quote</Button> */}
        </div>

        <div className={styles.opContent}>
          <a className={styles.noUnderline} target={"_blank"} href={user.githubUrl}>{user.userName}</a>
          { (() => {
            switch (message.type) {
              case 'thumbsup':
                return (<span> gave praise to your opinion. </span>);
              case 'reply':
                return (<span> replied you in this discussion. </span>);
            }
          })()}
          <span onClick={this.visit.bind(this)}>
            <Link className={styles.noUnderline} to={`/${message.forumSlug}/discussion/${message.discussionSlug}`}>{ message.discussionTitle }</Link>
          </span>
        </div>

        { (this.props.deletingMessage === message.id) && <div className={styles.deletingMessage}>Deleting Message ...</div> }
      </div>
    );
  }
}

ThuMessage.defaultProps = {
  message: Message.defaultProps,
  handleVisit: () => {},
  deletingMessage: null,
  deleteMessage: () => {},
  currentUserId: '12345',
  currentUserRole: 'user',
};

ThuMessage.propTypes = {
  message: React.PropTypes.shape(Message.propTypes),
  handleVisit: React.PropTypes.func,
  deletingMessage: React.PropTypes.any,
  deleteMessage: React.PropTypes.func,
  currentUserId: React.PropTypes.string,
  currentUserRole: React.PropTypes.string,
};

export default ThuMessage;