import { Elysia } from 'elysia';
import { swagger } from '@elysiajs/swagger';
import { apiRouter } from './controllers';

export const app = new Elysia()
  .use(swagger())
  .get('/health', () => 'OK')
  .use(apiRouter)
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);

export type App = typeof app;
