import request from 'supertest';
import { app } from '../src/app';

describe('Get Repo API working', () => {
  it('should return status 200 or 400 for the middlewire', async () => {
    const res = await request(app).get('/repos');
    expect([200, 400]).toContain(res.statusCode);
  });
});
