import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import classnames from 'classnames';
import appLayout from 'SharedStyles/appLayout.css';
import styles from './styles.css';

// components used in this view
import Profile from 'Components/UserProfile/Profile';
import MessageList from 'Components/Message/MessageList';

import { fetchUserMessages } from './actions';

class Message extends Component {
  componentDidMount() {
    const { fetchUserMessages } = this.props;
    console.log(this.props.params);
    const { username } = this.props.params;
    fetchUserMessages(username);
  }

  render() {
    const {
      fetchingMessages,
      messages,
      error,
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
      github,
      avatarUrl,
    } = messages;

    return (
      <div className={classnames(appLayout.constraintWidth, styles.container)}>
        <Helmet><title>{`${name || username} | ReForum`}</title></Helmet>

        <div className={appLayout.primaryContent}>
          <Profile
            name={name}
            gitHandler={username}
            location={github.location}
            avatarUrl={avatarUrl}
          />

          <MessageList
            userProfile
            messages={messages}
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
  }; },
  (dispatch) => { return {
    fetchUserMessages: (userSlug) => { dispatch(fetchUserMessages(userSlug)); },
  }; }
)(Message);