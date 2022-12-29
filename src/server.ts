import { FastifyInstance } from 'fastify';
import app from './app';

const HOST= 'localhost';
const PORT = 3000;

app().then(async (fastify: FastifyInstance) => {

    await fastify.listen({
        port: PORT,
        host: HOST
    })
    console.log(`Server listening on http://${HOST}:${PORT}`)
}).catch(er => {
    // handle error, anything u want to do
    console.error(er);
});