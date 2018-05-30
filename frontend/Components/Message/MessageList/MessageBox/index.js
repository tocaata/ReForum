import React, { Component } from 'react';
import classnames from 'classnames';
import Moment from 'moment';
import styles from './styles.css';

class MessageBox extends Component {
  render() {
    return (
      <div className={ styles.container }>
        {this.props.content}
      </div>
    );
  }
}

MessageBox.defaultProps = {
  content: "",
}

MessageBox.propTypes = {
  content: React.PropTypes.string,
}

export default MessageBox;