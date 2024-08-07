import { t } from 'elysia';

export const GetUserByIdParamsSchema = t.Object({
    id: t.String(),
}, {
    description: 'Expects user ID',
});

export const GetUserByIdResponseSchema = t.Object({
    id: t.String(),
    name: t.String(),
}, {
    description: 'Returns user info',
})