// test/index.test.ts
import { describe, expect, it } from 'bun:test';
import { treaty } from '@elysiajs/eden';
import { app } from '~/index';

const client = treaty(app);

describe('users', () => {
  it('get user by id', async () => {
    const id = 'abc123';
    const { data, error } = await client.api.v1
      .users({
        id: id,
      })
      .get();

    // @ts-ignore
    expect(data.id).toBe(id);
  });
});
