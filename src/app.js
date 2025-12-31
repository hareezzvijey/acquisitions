import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.status(200).send('Hello from Acqiuisitions Service!');
});

export default app;