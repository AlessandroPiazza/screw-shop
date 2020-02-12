import { Router } from 'express';
import ConsultantController from './app/controller/ConsultantController';
import ConsultantSessionController from './app/controller/ConsultantSessionController';
import authMiddleware from './middlewares/auth';
import Database from './database/index';

const routes = new Router();

routes.post('/sessions', ConsultantSessionController.store);
routes.post('/consultants', ConsultantController.store);
routes.use(authMiddleware);


export default routes;
