import { Elysia } from 'elysia';
import { swagger } from '@elysiajs/swagger';
import { routerV1 } from './controllers/v1';

const app = new Elysia({ prefix: '/api' })
  .use(swagger())
  .get('/', () => 'Hello Elysia')
  .use(routerV1)
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
