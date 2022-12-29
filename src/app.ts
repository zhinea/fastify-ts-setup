import Fastify, { FastifyInstance } from "fastify";
import FastifyFormbody from "@fastify/formbody";

async function app(): Promise<FastifyInstance> {
  const fastify = Fastify({ logger: true });

  // register plugin
  fastify.register(FastifyFormbody);

  fastify.get("/", async () => {
    return {
      code: 200,
    };
  });

  return fastify;
}

export default app;
