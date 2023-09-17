import express, { Express, Request, Response } from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import dotenv from 'dotenv';
import "reflect-metadata"
dotenv.config()

const statusRouter = require('./routes/statusRoute');
/* const subcontrolsRouter = require('./routes/subcontrolsRoute');
const frameworksRouter = require('./routes/frameworksRoute')
const providerRouter = require('./routes/providerRoute')
const settingsRouter = require('./routes/settingsRoute')
const accountRouter = require('./routes/accountRoute') */
//const evidencesRouter = require('./routes/evidencesRoute')

import {
  createTask,
  getTasks,
  getTaskById,
  updateTask,
  deleteTask,
} from './controllers/TaskController';

const PORT = process.env.PORT || 3000;
const app: Express = express();

app.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Cache-Control, Authorization");
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', statusRouter);
//app.use('/subcontrols', subcontrolsRouter);
//app.use('/frameworks', frameworksRouter );
//app.use('/evidences', evidencesRouter );
//app.use('/provider', providerRouter );
//app.use('/settings', settingsRouter)
//app.use('/account', accountRouter)
//app.use('/account', accountRouter)

app.post('/api/tasks', createTask);
app.get('/api/tasks', getTasks);
app.get('/api/tasks/:id', getTaskById);
app.put('/api/tasks/:id', updateTask);
app.delete('/api/tasks/:id', deleteTask);

app.listen(PORT, () => console.log(`Running on ${PORT} ⚡ `));
