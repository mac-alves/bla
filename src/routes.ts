import express, { Response, Request } from 'express';
const routes = express.Router();

import UserController from './controllers/UserController';
const userController = new UserController();

// documentation
routes.get('/', (request: Request, response: Response) => {
    response.render('index.html');
});

routes.get('/users', userController.index);
routes.get('/users/:id', userController.show);
routes.post('/users', userController.store);
routes.put('/users/:id', userController.update);
routes.delete('/users/:id', userController.delete);

export default routes;