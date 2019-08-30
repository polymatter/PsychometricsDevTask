import * as bodyParser from 'body-parser';
import compression from 'compression';
import express from 'express';
import * as userController from './user/user.controller';

const app = express();

app.set('port', process.env.PORT || 8080);

app.use(compression());
app.use(bodyParser.json());

app.get('/users', userController.getPage);
app.get('/users/:userId', userController.get);
app.post('/users', userController.save);
app.put('/users/:userId', userController.save);
app.delete('/users/:userId', userController.deleteOne);

export default app;
