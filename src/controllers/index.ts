import { Elysia } from 'elysia';
import { routerV1 } from './v1';

export const apiRouter = new Elysia({ prefix: '/api' }).use(
  routerV1
);
