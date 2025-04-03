import request from 'supertest';
import app from '../server.js'; // Note the .js extension
import mongoose from 'mongoose';


describe('Task API Tests', () => {
  let taskId;
  let token;

  beforeAll(async () => {
    const res = await request(app)
      .post('/api/users/login')
      .send({ email: 'test@test.com', password: 'password' });
    token = res.body.token;
  });

  describe('POST /api/tasks/addTask', () => {
    it('should create a new task (happy path)', async () => {
      const res = await request(app)
        .post('/api/tasks/addTask')
        .set('Authorization', `Bearer ${token}`)
        .send({ title: 'Test Task', description: 'Test Description' });
      expect(res.statusCode).toEqual(200);
      const task = await Task.findOne({ title: 'Test Task' });
      expect(task).toBeDefined();
    });

    it('should return 400 if text is missing (sad path)', async () => {
      const res = await request(app)
        .post('/api/tasks/addTask')
        .set('Authorization', `Bearer ${token}`)
        .send({});
      expect(res.statusCode).toEqual(400);
    });

    it('should return 401 when no token is present (sad path)', async () => {
      const res = await request(app)
        .post('/api/tasks/addTask')
        .send({ title: 'test', description: 'desc' });
      expect(res.statusCode).toEqual(401);
    });
  });
});