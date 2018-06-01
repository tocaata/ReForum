const vistMessage = require('./controller').vistMessage;

const MessageAPI = (app) => {
  app.put('/api/message/visit/:messageId', (req, res) => {
    if (req.user) {
      vistMessage(req.params.messageId).then(
        (result) => { res.send(result) },
        (error) => { res.send(error) }
      );
    } else {
      res.send({ authenticated: false });
    }
  });
}