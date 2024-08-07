import { Elysia } from 'elysia';
import {
  GetUserByIdParamsSchema,
  GetUserByIdResponseSchema,
} from './users.dto';
import { getUserById } from '../../../modules/users';

export const userRoutes = new Elysia({
  prefix: '/users',
})
  .get('/', () => {
    return 'hello, world';
  })
  .get('/:id', (ctx) => getUserById(ctx.params.id), {
    params: GetUserByIdParamsSchema,
    response: GetUserByIdResponseSchema,
  });
