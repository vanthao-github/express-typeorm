import "reflect-metadata";
import {createConnection} from "typeorm";
import app from './app';
import { port } from './configs/app';

createConnection().then(async connection => {
  app.listen(port, () => {
    console.log(`Server started at port ${port}`);
  });
}).catch(error => console.log(error));
