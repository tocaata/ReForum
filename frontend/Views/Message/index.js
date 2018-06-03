import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import classnames from 'classnames';
import appLayout from 'SharedStyles/appLayout.css';
import styles from './styles.css';

// components used in this view
import Profile from 'Components/UserProfile/Profile';
import MessageList from 'Components/Message/MessageList';

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

          <MessageList
            userProfile
            messages={messages}
            handleVisit={handleVisit}
            deleteMessage={deleteMessage}
          />
        </div>
      </div>
    );
  }
}


export default connect(
  (state) => { return {
    fetchingMessages: state.userMessages.fetchingMessages,
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
    deleteMessage: (messageID) => {
      console.log(`Start to delete ${messageID}`);
      dispatch(deleteMessage(messageID));
    },
  }; }
)(Message);