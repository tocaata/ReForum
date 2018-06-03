const visitMessage = require('./controller').visitMessage;
const deleteMessage = require('./controller').deleteMessage;

const MessageAPI = (app) => {
  app.put('/api/message/visit/:messageId', (req, res) => {
    if (req.user) {
      visitMessage(req.params.messageId).then(
        (result) => { res.send(result); },
        (error) => { res.send(error); }
      );
    } else {
      res.send({ authenticated: false });
    }
  });

  app.delete('/api/message/delete/:messageId', (req, res) => {
    if (req.user) {
      deleteMessage(req.params.messageId).then(
        (result) => { res.send(result) },
        (error) => {
          console.log(error);
          res.send(error);
        },
      );
    } else {
      res.send({ authenticated: false });
    }
  });
};

module.exports = MessageAPI;