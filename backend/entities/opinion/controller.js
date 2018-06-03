// models
const Opinion = require('./model');
const Message = require('../message/model');
const Discussion = require('../discussion/model');

/**
 * get all opinion regarding a single discussion
 * @param  {ObjectId} discussion_id
 * @return {Promise}
 */
const getAllOpinions = (discussion_id) => {
  return new Promise((resolve, reject) => {
    Opinion
    .find({ discussion_id })
    .populate('user')
    .sort({ date: -1 })
    .exec((error, opinions) => {
      if (error) { console.log(error); reject(error); }
      else if (!opinions) reject(null);
      else resolve(opinions);
    });
  });
};

/**
 * create an opinion regarding a discussion
 * @param  {ObjectId} forum_id
 * @param  {ObjectId} discussion_id
 * @param  {ObjectId} user_id
 * @param  {Object} content
 * @return {Promise}
 */
const createOpinion = async (user_id, { forum_id, discussion_id, content }) => {
  const newOpinion = new Opinion({
    forum_id,
    discussion_id,
    discussion: discussion_id,
    user_id,
    user: user_id,
    content,
    date: new Date(),
  });

  const newOp = await newOpinion.save();
  const discuss = await Discussion.findOne({ _id: discussion_id}).exec();
  await sendMessage(user_id, discuss.user_id, "reply", discussion_id, `${user_id} replied your discussion.`)

  return newOpinion;
};

const updateOpinion = (opinion_id) => {
  // TODO: implement update for opinion
};

/**
 * delete a single opinion
 * @param  {ObjectId} opinion_id
 * @return {Promise}
 */
const deleteOpinion = (opinion_id) => {
  return new Promise((resolve, reject) => {
    Opinion
    .remove({ _id: opinion_id })
    .exec((error) => {
      if (error) { console.log(error); reject(error); }
      else resolve('deleted');
    });
  });
};

const sendMessage = (from_id, to_id, type, discussion_id, content) => {
  return new Promise((resolve, reject) => {
    const newMessage = new Message({
      from: from_id,
      to: to_id,
      type,
      discussion: discussion_id,
      content,
      read: false,
      date: new Date()
    });

    newMessage.save((error) => {
      if (error) { console.log(error); reject(error); }
      else {
        resolve(newMessage);
      }
    });
  });
};

const thumbsUpOpinion = (opinion_id, user_id) => {
  return new Promise((resolve, reject) => {
    Opinion.findById(opinion_id, (error, opinion) => {
      if (error) { console.log(error); reject(error); }
      else if (!opinion) { reject(null); }
      else {
        let matched = opinion.thumbsups.indexOf(user_id), matchedDown = opinion.thumbsdowns.indexOf(user_id);
        let isThumbsup = false;
        if (matched < 0) {
          opinion.thumbsups = opinion.thumbsups.concat(user_id);
          isThumbsup = true;
        } else {
          opinion.thumbsups.splice(matched, 1);
          isThumbsup = false;
        }

        if (matchedDown >= 0) {
          opinion.thumbsdowns.splice(matched, 1);
        }
        opinion.save((error, updatedOpinion) => {
          if (error) { console.log(error); reject(error); }
          else if (isThumbsup){
            sendMessage(user_id, opinion.user_id, 'thumbsup', opinion.discussion_id, `${user_id} agree your opinion.`)
            .then(
              (result) => { resolve(updatedOpinion); },
              (error) => { console.log(error); reject(error); }
            );
          } else {
            resolve(updatedOpinion);
          }
        });
      }
    });
  });
}

const thumbsDownOpinion = (opinion_id, user_id) => {
  return new Promise((resolve, reject) => {
    Opinion.findById(opinion_id, (error, opinion) => {
      if (error) { console.log(error); reject(error); }
      else if (!opinion) { reject(null); }
      else {
        let matched = opinion.thumbsdowns.indexOf(user_id), matchedUp = opinion.thumbsups.indexOf(user_id);
        if (matched < 0) {
          opinion.thumbsdowns = opinion.thumbsdowns.concat(user_id);
        } else {
          opinion.thumbsdowns.splice(matched, 1);
        }

        if (matchedUp >= 0) {
          opinion.thumbsups.splice(matched, 1);
        }
        opinion.save((error, updatedOpinion) => {
          if (error) { console.log(error); reject(error); }
          else resolve(updatedOpinion);
        });
      }
    });
  });
}

module.exports = {
  getAllOpinions,
  createOpinion,
  updateOpinion,
  deleteOpinion,
  thumbsUpOpinion,
  thumbsDownOpinion,
};
