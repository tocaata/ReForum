import React from 'react';

function toObject({_id: id, username: userName, avatarUrl, messagesCount, github: {url: githubUrl}}) {
  return {id, userName, avatarUrl, githubUrl, messagesCount};
}

const propTypes = {
  id: React.PropTypes.string,
  userName: React.PropTypes.string,
  avatarUrl: React.PropTypes.string,
  githubUrl: React.PropTypes.string,
  messagesCount: React.PropTypes.number,
};

const defaultProps = {
  id: "",
  userName: "",
  avatarUrl: "",
  githubUrl: "",
  messagesCount: 0,
};

export default {
  toObject,
  propTypes,
  defaultProps,
};