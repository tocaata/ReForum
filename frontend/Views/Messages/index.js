import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import classnames from 'classnames';
import appLayout from 'SharedStyles/appLayout.css';
import styles from './styles.css';

// components used in this view
import Profile from 'Components/UserProfile/Profile';

class Message extends Component {
  ComponentDidMount() {
    1
  }

  render() {
    1
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