import express from 'express';
import apiRouter from './api';
import axios from 'axios';
import config from './config';
import serverRender from './serverRender';
import bodyParser from 'body-parser';
const server = express();

server.use(bodyParser.json());
server.set('view engine', 'ejs');

server.get(['/', '/api'], (req, res) => {
    serverRender()
    .then(({ initialMarkup, initialData }) => {
      //console.log(initialData);
      res.render('index', {
        initialMarkup,
        initialData
      });
    })
    .catch(error => {
      //console.error(error);
      res.status(404).send('Bad Request');
    });
});

server.use('/api', apiRouter);
server.use(express.static('public'));

server.listen(config.port, config.host, () => {
  console.info('Express listening on port %d and host %s', config.port, config.host);
});
