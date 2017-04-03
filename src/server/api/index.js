import express from 'express';
import { requestJson } from '../../client/utils';

const init = () => {
  const app = express();
  app.get('/heros', (req, res, next) => {
    const uri = '/v1/public/characters';
    return requestJson(uri)
      .then(data => console.log(data.data.results))
      .catch(err => console.log('error: ', err));
  }),
  app.get('/hero/:id', (req, res, next) => console.log('goto load current Hero'));
  return app;
}

export default init;
