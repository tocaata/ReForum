const Message = require('./model');

const visitMessage = (messageId) => {
  return new Promise((resolve, reject) => {
    Message.findById(messageId, (error, message) => {
      if (error) { console.log(error); reject(error); }
      else {
        if (!message) {
          console.log(error); reject(error);
        } else {
          message.read = true;
          message.save((error, updatedMessage) => {
            if (error) { console.log(error); reject(error); }
            else {
              resolve(updatedMessage);
            }
          });
        }
      }
    });
  });
};

const deleteMessage = async (messageId) => {
  await Message.remove({ _id: messageId }).exec();
  return { deleted: true };
};

module.exports = {
  visitMessage,
  deleteMessage,
};