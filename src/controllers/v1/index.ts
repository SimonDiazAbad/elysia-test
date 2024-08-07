import { Elysia } from 'elysia';
import { userRoutes } from './users/users.controller';

export const routerV1 = new Elysia({ prefix: '/v1' }).use(
  userRoutes
);
