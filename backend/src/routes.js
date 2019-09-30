import { Router } from 'express';

import authMiddleware from './app/middlewares/auth';

import UserController from './app/controllers/UserController';
import LimitController from './app/controllers/LimitController';
import AccountController from './app/controllers/AccountController';
import BalanceController from './app/controllers/BalanceController';
import FavoriteController from './app/controllers/FavoriteController';
import SessionController from './app/controllers/SessionController';

const routes = new Router();

routes.post('/users', UserController.store);

routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

routes.get('/users', UserController.index);

routes.get('/limits/:id', LimitController.index);
routes.post('/limits', LimitController.store);

routes.get('/accounts', AccountController.index);
routes.post('/accounts', AccountController.store);
routes.put('/accounts', AccountController.update);

routes.post('/balances', BalanceController.store);

routes.post('/favorites', FavoriteController.store);
routes.get('/favorites', FavoriteController.index);
routes.put('/favorites', FavoriteController.update);
routes.delete('/favorites', FavoriteController.delete);

export default routes;
