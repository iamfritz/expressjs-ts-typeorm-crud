import express, { Express, Request, Response } from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import dotenv from 'dotenv';
import "reflect-metadata"
dotenv.config()

const StatusRoute = require('./routes/statusRoute');
const TaskRoute = require('./routes/TaskRoute');

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

app.use('/', StatusRoute);
app.use('/api/tasks', TaskRoute);

app.listen(PORT, () => console.log(`Running on ${PORT} ⚡ `));
