import User from 'Libs/User';
import React from 'react';


function toObject({_id: id, from, type, read, date, discussion: {_id: discussionId, discussion_slug: discussionSlug, title: discussionTitle, forum: {forum_slug: forumSlug}}}) {
  return {id, from: User.toObject(from), type, read, date, discussionId, discussionSlug, discussionTitle, forumSlug}
}

const propTypes = {
  id: React.PropTypes.string,
  from: React.PropTypes.shape(User.propTypes),
  type: React.PropTypes.string,
  read: React.PropTypes.boolean,
  discussionId: React.PropTypes.string,
  discussionSlug: React.PropTypes.string,
  discussionTitle: React.PropTypes.string,
  forumSlug: React.PropTypes.string,
  date: React.PropTypes.string,
}

const defaultProps = {
  id: "",
  from: User.defaultProps,
  type: "",
  read: false,
  discussionId: "",
  discussionTitle: "",
  discussionSlug: "",
  forumSlug: "",
  date: "",
}

export default {
  toObject,
  propTypes,
  defaultProps,
}