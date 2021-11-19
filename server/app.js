import express from 'express';

export default const makeApp = function(database) {
  const app = express();

  app.use(express.json());

  app.get('/reviews', (req, res) => {
    // easiest way to make an express app send back json content type is sending an empty {} because it will automatically convert it to json
    const {password, username} = req.body;
    if (!password || !username) {
      res.sendStatus(400);
      return;
    }

    database.createUser();

    res.send({userId: 0});
  });
  return app;
}
