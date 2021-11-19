import app from './index.js';

const app = express();

app.get('/test', (req, res) => {
  res.send('im working');
});

app.listen(8080, () => console.log('listening on port 3000'));
