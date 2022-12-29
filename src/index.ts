import Fastify, { FastifyInstance } from 'fastify';
import FastifyFormbody from '@fastify/formbody';

const HOST= 'localhost';
const PORT = 3000;

async function main(): Promise<FastifyInstance>{
    const fastify = Fastify()

    // register plugin
    fastify.register(FastifyFormbody);

    // register route
    fastify.get('/', async(req, reply) => {
        
        return reply.send({
            message: 'Hello World',
            query: req.query
        })
    })

    // return fastify instance
    return fastify;
}

main().then(async (fastify: FastifyInstance) => {

    await fastify.listen({
        port: PORT,
        host: HOST
    })
    console.log(`Server listening on http://${HOST}:${PORT}`)
}).catch(er => {
    // handle error, anything u want to do
    console.error(er);
});