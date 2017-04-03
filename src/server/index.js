import express from 'express';
import http from 'http';
import cors from 'cors';
import path from 'path';

import config from '../../config/development';
import initApi from './api';

const { server: { host, port } } = config;
const app = express();
const httpServer = http.createServer(app);

app.use(cors());
app.use('/ping', (req, res) => res.json({ ping: 'pong' }));

app.use('/api', initApi());

app.use((req, res) => {
  res.redirect('/public/index.html');
})

httpServer.listen(port, host, () => {
  console.log('Server listening on port: ', port);
  console.log('url: ', `${host}:${port}`);
});
