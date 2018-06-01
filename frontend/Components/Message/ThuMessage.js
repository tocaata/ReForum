import React, { Component } from 'react';
import classnames from 'classnames';
import Moment from 'moment';
import Global from 'SharedStyles/globalStyles.css';
import styles from './ThuMessage.css';
import { Link } from 'react-router';

class ThuMessage extends Component {
  visit() {
    console.log("click");
    this.props.handleVisit(message_id);
  }

	render() {
    const { discussion_title, discussion_slug, userUrl, avatarUrl, userName, date, discussion_forum, visit } = this.props;

		return (
      <div>
        <div className={styles.column}>
          <a href={userUrl}>
            <img src={avatarUrl} className={Global.smallAvatar}/>
          </a>
        </div>
        <dd className={styles.column}>
          <dl className={styles.gray}>{ Moment(new Date(date)).format('YYYY-MM-DD HH:mm:ss')}</dl>
          <dl>
            <a className={styles.noUnderline} href={userUrl}>{userName}</a>
            <span> gave praise to your opinion. </span>
            <span onClick={this.visit.bind(this)}>
              <Link className={styles.noUnderline} to={`/${discussion_forum}/discussion/${discussion_slug}`}>{ discussion_title }</Link>
            </span>
          </dl>
        </dd>
      </div>
		);
	}
}

ThuMessage.defaultProps = {
  discussion_title: "",
  discussion_slug: "",
  userUrl: "",
  avatarUrl: "",
  userName: "",
  date: "",
  discussion_forum: "",
  handleVisit: () => {},
};

ThuMessage.propTypes = {
  discussion_title: React.PropTypes.string,
  discussion_slug: React.PropTypes.string,
  userUrl: React.PropTypes.string,
  avatarUrl: React.PropTypes.string,
  userName: React.PropTypes.string,
  date: React.PropTypes.string,
  discussion_forum: React.PropTypes.string,
  handleVisit: React.PropTypes.func,
};

export default ThuMessage;
