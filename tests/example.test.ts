import app from "../src/app";

test("Test / (GET)", async () => {
  const fastify = await app();

  const res = await fastify.inject({
    method: "GET",
    url: "/",
  });

  expect(res.statusCode).toBe(200);
  expect(res.body).toBe('{"code":200}');
});
