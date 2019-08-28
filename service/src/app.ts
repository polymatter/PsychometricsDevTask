import * as bodyParser from 'body-parser';
import compression from 'compression';
import express from 'express';
import * as db from './db';
import * as userController from './user/user.controller';

const app = express();

db.init();

app.set('port', process.env.PORT || 8080);

app.use(compression());
app.use(bodyParser.json());

app.get('/user', userController.getUsers);

export default app;
