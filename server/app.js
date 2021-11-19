import express from 'express';

const app = express();

app.post('/users', (req, res) => {
  // easiest way to make an express app send back json content type is sending an empty {} because it will automatically convert it to json
  res.send({}).sendStatus(200);
});

export default app;