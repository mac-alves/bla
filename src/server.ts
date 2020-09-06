import dotenv from 'dotenv';
dotenv.config()

import express from 'express';
import routes from './routes';
import path from 'path';

const app = express();

app.use(express.static(path.join(__dirname, '..', 'docs', 'demo')));
app.set('views', path.join(__dirname, '..', 'docs', 'demo'));
app.use(express.json());
app.use(routes);

app.listen(process.env.PORT, () => {
    console.log(`Server started in ${process.env.APP_URL}`)
});