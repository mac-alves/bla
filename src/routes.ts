import express, { Response, Request } from 'express';
const routes = express.Router();

import UserController from './controllers/UserController';
const userController = new UserController();

routes.get('/', (request: Request, response: Response) => {
    return response.json({
        description: 'simple user crud application',
        routes: {
            GET_ALL_USERS: {
                method: 'GET',
                route: '/users'
            },
            GET_USER: {
                method: 'GET',
                route: '/users/:id',
            },
            CREATE_USER: {
                method: 'POST',
                route: '/users',
                body: {
                    name: 'name user',
                    password: 'password user'
                }
            },
            UPDATE_USER: {
                method: 'PUT',
                route: '/users:/id',
                body: {
                    newName: 'new name user', 
                    newPassword: 'new password user', 
                    oldPassword: 'old password user'
                }
            },
            allUsers: {
                method: 'DELETE',
                route: '/users/:id',
            }
        }
    })
});

routes.get('/users', userController.index);
routes.get('/users/:id', userController.show);
routes.post('/users', userController.store);
routes.put('/users/:id', userController.update);
routes.delete('/users/:id', userController.delete);

export default routes;