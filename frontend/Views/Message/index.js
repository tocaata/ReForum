import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import classnames from 'classnames';
import appLayout from 'SharedStyles/appLayout.css';
import styles from './styles.css';

// components used in this view
import Profile from 'Components/UserProfile/Profile';
import ThuMessage from 'Components/Message/ThuMessage';

import { fetchUserMessages, handleVisit, deleteMessage } from './actions';

class Message extends Component {
  componentDidMount() {
    const { fetchUserMessages } = this.props;
    const { username } = this.props.params;
    fetchUserMessages(username);
  }

  render() {
    const {
      fetchingMessages,
      messages,
      error,
      user,
      handleVisit,
      deleteMessage,
      deletingMessage,
    } = this.props;

    if (fetchingMessages) {
      return (
        <div className={classnames(appLayout.constraintWidth, styles.loadingMsg)}>
          Loading users messages ...
        </div>
      );
    }

    const {
      name,
      username,
      githubLocation,
      avatarUrl,
    } = user;

    return (
      <div className={classnames(appLayout.constraintWidth, styles.container)}>
        <Helmet><title>{`${name || username} | ReForum`}</title></Helmet>

        <div className={appLayout.primaryContent}>
          <Profile
            name={name}
            gitHandler={username}
            location={githubLocation}
            avatarUrl={avatarUrl}
          />

          <div className={styles.header}>
            <span className={styles.title}>Messages</span>
          </div>
          { messages && messages.map((message, index) =>
              <ThuMessage message={message} handleVisit={handleVisit} deletingMessage={deletingMessage} deleteMessage={deleteMessage} key={index}/>
            )
          }
        </div>
      </div>
    );
  }
}


export default connect(
  (state) => { return {
    fetchingMessages: state.userMessages.fetchingMessages,
    deletingMessage: state.userMessages.deletingMessage,
    messages: state.userMessages.messages,
    error: state.userMessages.error,
    user: state.user,
    handleVisit: () => {},
    deleteMessage: () => {},
  }; },
  (dispatch) => { return {
    fetchUserMessages: (userSlug) => { dispatch(fetchUserMessages(userSlug)); },
    handleVisit: (messageID) => { 
      dispatch(handleVisit(messageID));
    },
    deleteMessage: (messageID) => { dispatch(deleteMessage(messageID)); },
  }; }
)(Message);