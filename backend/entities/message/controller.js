const Message = require('./model');

const visitMessage = async (messageId) => {
  let message = await Message.findOne({ _id: messageId }).exec();
  message.read = true;
  let updatedMessage = await message.save();
  updatedMessage = await updatedMessage.populate({path: 'discussion', populate: {path: 'forum'}}).populate('from').execPopulate();
  return updatedMessage;
};

const deleteMessage = async (messageId) => {
  await Message.remove({ _id: messageId }).exec();
  return { deleted: true };
};

module.exports = {
  visitMessage,
  deleteMessage,
};