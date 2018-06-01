import React, { Component } from 'react';
import classnames from 'classnames';
import styles from './MessageBox.css';
import ThuMessage from './ThuMessage';

class MessageBox extends Component {
  render() {
    return (
      <div className={ styles.container }>
        { this.props.children }
      </div>
    );
  }
}

MessageBox.defaultProps = {
}

MessageBox.propTypes = {
}

export default MessageBox;