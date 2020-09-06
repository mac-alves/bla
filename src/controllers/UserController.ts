import knex from '../database/connection';
import { Request, Response } from 'express';
import CryptPassword from '../utils/CryptPassword';

class UserController {
    async index(request: Request, response: Response){
        const users = await knex('users').select('id', 'name');

        return response.json({users});
    }

    async show(request: Request, response: Response){
        const { id } = request.params;

        const user = await knex('users').select('id', 'name').where('id', Number(id));

        return response.json({user});
    }

    async store(request: Request, response: Response){
        const { name, password } = request.body;
        const crypt = new CryptPassword();
        const user = await knex('users').select('*').where('name', name);
        
        if (user.length > 0) {
            return response.status(401).json({ 
                error: 'Usuário ja existe!',
            });
        }

        const pass = await crypt.encrypt(String(password));        
        const userId = await knex('users').insert({ name, password: pass }).returning('id');
        const newUser = await knex('users').select('id', 'name').where('id', userId[0]);

        return response.status(201).json({
            user: newUser[0]
        });
    }

    async update(request: Request, response: Response){
        const { id } = request.params;
        const { newName, newPassword, oldPassword } = request.body;
        const crypt = new CryptPassword();
        
        const user = await knex('users').select('*').where('id', Number(id));

        if (user.length === 0) {
            return response.status(401).json({ 
                error: 'Usuário não existe',
            });
        }
        
        const isUser = await crypt.compare(oldPassword, user[0].password);
        if (!isUser){
            return response.status(401).json({ 
                error: 'Dados de usuário incorretos',
            });
        }

        const pass = await crypt.encrypt(String(newPassword));
        await knex('users')
            .where('id', user[0].id)
            .update({
                name: newName,
                password: pass
            });

        return response.status(200).json({
            msg: 'Usuário atualizado.'
        });
    }

    async delete(request: Request, response: Response){
        const { id } = request.params;
        let err = '';

        const user = await knex('users').select('*').where('id', Number(id));

        if (user.length === 0) {
            return response.status(401).json({ 
                error: 'Usuário não existe',
            });
        }

        try {
            await knex('users')
                .where('id', Number(id))
                .del();

        } catch (error) {
            err = 'Falha ao excluir usuário';
        }
        
        return response.status(401).json({
            msg: err,
            success: (!err) ? true : false
        });
    }
}

export default UserController;