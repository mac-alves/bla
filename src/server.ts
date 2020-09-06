import dotenv from 'dotenv';
dotenv.config()

import express from 'express';

const app = express();

app.get('/', (req, resp)=> {
    return resp.json(['nada']);
})

app.listen(process.env.PORT, () => {
    console.log(`Server started in ${process.env.APP_URL}`)
});