import express from 'express';
import { requestJson } from '../utils';

const init = () => {
  const app = express();
  app.get('/heros', (req, res, next) => {
    const uri = '/v1/public/characters';
    return requestJson(uri)
      .then(data => res.send(data.data.results))
      .catch(err => console.log('error: ', err));
  }),
  app.get('/hero/:id', (req, res, next) => {
  	const uri = `/v1/public/characters/${req.params.id}`;
  	console.log(uri);
  	return requestJson(uri)
      .then(data => res.send(data.data.results))
      .catch(err => console.log('error: ', err));
  });
  return app;
}

export default init;
