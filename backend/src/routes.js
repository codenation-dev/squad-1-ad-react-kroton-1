import { Router } from 'express';

import authMiddleware from './app/middlewares/auth';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import LogController from './app/controllers/LogController';

const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

routes.post('/logs', LogController.store);
routes.put('/logs/:log_id', LogController.update);
routes.delete('/logs/:log_id', LogController.delete);

export default routes;
