import dotenv from 'dotenv';
dotenv.config()

import express, { Response, Request } from 'express';
import { v4 as uuidv4 } from 'uuid';
import knex from './database/connection';

const app = express();

app.get('/', async (request: Request, response: Response)=> {
    // console.log(uuidv4());
    const users = await knex('users').select('*');

    return response.status(200).json({
        users
    });
})

app.listen(process.env.PORT, () => {
    console.log(`Server started in ${process.env.APP_URL}`)
});