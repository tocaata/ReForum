import React, { Component } from 'react';
import classnames from 'classnames';
import Moment from 'moment';
import Global from 'SharedStyles/globalStyles.css';
import styles from './ThuMessage.css';
import { Link } from 'react-router';
import Message from 'Libs/Message';

class ThuMessage extends Component {
  visit() {
    console.log("click");
    this.props.handleVisit(this.props.message.id);
  }

	render() {
    const {from: user} = this.props.message;
    const message = this.props.message;

		return (
      <div>
        <div className={styles.column}>
          <a href={user.githubUrl} target={"_blank"}>
            <img src={user.avatarUrl} className={Global.smallAvatar}/>
          </a>
        </div>
        <dd className={styles.column}>
          <dl className={classnames(styles.gray, styles.narrowDl)}>{ Moment(new Date(message.date)).format('YYYY-MM-DD HH:mm:ss')}</dl>
          <dl className={styles.narrowDl}>
            <a className={styles.noUnderline} target={"_blank"} href={user.githubUrl}>{user.userName}</a>
            <span> gave praise to your opinion. </span>
            <span onClick={this.visit.bind(this)}>
              <Link className={styles.noUnderline} to={`/${message.forumSlug}/discussion/${message.discussionSlug}`}>{ message.discussionTitle }</Link>
            </span>
          </dl>
        </dd>
      </div>
		);
	}
}

ThuMessage.defaultProps = {
  message: Message.defaultProps,
  handleVisit: () => {},
};

ThuMessage.propTypes = {
  message: React.PropTypes.shape(Message.propTypes),
  handleVisit: React.PropTypes.func,
};

export default ThuMessage;