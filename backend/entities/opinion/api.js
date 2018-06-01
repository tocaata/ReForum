// controllers
const getAllOpinions = require('./controller').getAllOpinions;
const createOpinion = require('./controller').createOpinion;
const deleteOpinion = require('./controller').deleteOpinion;
const thumbsUpOpinion = require('./controller').thumbsUpOpinion;
const thumbsDownOpinion = require('./controller').thumbsDownOpinion;

/**
 * opinion apis
 */
const opinionAPI = (app) => {
  // create an opinion
  app.post('/api/opinion/newOpinion', (req, res) => {
    if(req.user) {
      createOpinion(req.body).then(
        (result) => { res.send(result); },
        (error) => { res.send(error); }
      );
    } else {
      res.send({ authenticated: false });
    }
  });

  // remove an opinion
  app.delete('/api/opinion/deleteOpinion/:opinion_id', (req, res) => {
    if(req.user) {
      deleteOpinion(req.params.opinion_id).then(
        (result) => { res.send({ deleted: true }); },
        (error) => { res.send({ deleted: false }); }
      );
    }
  });


  // thumbs up an opinion
  app.put('/api/opinion/thumbsUpOpinion/:opinion_id', (req, res) => {
    if (req.user) {
      thumbsUpOpinion(req.params.opinion_id, req.user._id, req.params.date).then(
        (result) => { res.send({ thumbsUp: true }); },
        (error) => { res.send({ thumbsUp: false }); }
      );
    }
  });

  app.put('/api/opinion/thumbsDownOpinion/:opinion_id', (req, res) => {
    if (req.user) {
      thumbsDownOpinion(req.params.opinion_id, req.user._id).then(
        (result) => { res.send({ thumbsDown: true }); },
        (error) => { res.send({ thumbsDown: false }); }
      );
    }
  });
};

module.exports = opinionAPI;