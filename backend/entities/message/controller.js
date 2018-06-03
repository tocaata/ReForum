const Message = require('./model');

const vistMessage = (messageId) => {
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
}

module.exports = {
  vistMessage,
};