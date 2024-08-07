import { t } from 'elysia';

export const GetUserByIdParamsSchema = t.Object({
    id: t.String(),
});

export const GetUserByIdResponseSchema = t.Object({
    id: t.String(),
    name: t.String(),
})