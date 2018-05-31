import React, { Component } from 'react';
import classnames from 'classnames';
import Moment from 'moment';
import Global from 'SharedStyles/globalStyles.css';
import styles from './ThuMessage.css';

class ThuMessage extends Component {
	render() {
		return (
      <div>
        <div className={styles.column}>
          <a href={this.props.userUrl}>
            <img src={this.props.avatarUrl} className={Global.smallAvatar}/>
          </a>
        </div>
        <div className={styles.column}>
          <div>{this.props.date}</div>
          <div>{this.props.content}</div>
        </div>
      </div>
		);
	}
}

ThuMessage.defaultProps = {
  content: "",
  avatarUrl: "",
  githubUrl: "",
}

ThuMessage.propTypes = {
  content: React.PropTypes.string,
  avatarUrl: React.PropTypes.string,
  githubUrl: React.PropTypes.string,
}

export default ThuMessage;