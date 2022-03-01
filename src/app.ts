import * as express from 'express';
import { Request, Response, NextFunction } from 'express';
import * as bodyParser from "body-parser";
import * as morgan from "morgan";
import { Routes } from './routes';

function handleError(err, _req, res, _next) {
  console.log("err handle ", err);
  res.status(err.statusCode || 500).send(err.message)
};

const app = express();
app.use(morgan('tiny'));
app.use(bodyParser.json());

Routes.forEach(route => {
  (app as any)[route.method](route.route, 
    ...route.middleware || [],
    async (req: Request, res: Response, next: NextFunction) => {
      try {
        const result = await (new (route.controller as any))[route.action](req, res, next);
        res.json(result);
      } catch (error) {
        console.log("error ", error);
        
        next(error);
      }
  });
});

app.use(handleError);

export default app;