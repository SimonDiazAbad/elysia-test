import { Elysia } from 'elysia';
import { GetUserByIdParamsSchema, GetUserByIdResponseSchema } from './users.dto';

export const userRoutes = new Elysia({
  prefix: '/users',
})
  .get('/', () => {
    return 'hello, world';
  })
  .get(
    '/:id',
    (ctx: { params: { id: string } }) => {
      return {
        id: ctx.params.id,
        name: 'Elysia',
      };
    },
    {
      params: GetUserByIdParamsSchema,
      response: GetUserByIdResponseSchema,
    }
  );
