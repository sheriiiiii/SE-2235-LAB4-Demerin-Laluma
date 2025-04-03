import request from 'supertest';
import app from '../server.js'; 
import mongoose from 'mongoose';

describe('User API Tests', () => {
  describe('POST /api/users/register', () => {
    it('should register a new user (happy path)', async () => {
      const res = await request(app)
        .post('/api/users/register')
        .send({ name: 'Test User', email: 'test2@test.com', password: 'password' });
      expect(res.statusCode).toEqual(201);
      const user = await User.findOne({ email: 'test2@test.com' });
      expect(user).toBeDefined();
    });

    it('should return 400 if email is missing (sad path)', async () => {
      const res = await request(app)
        .post('/api/users/register')
        .send({ name: 'Test User', password: 'password' });
      expect(res.statusCode).toEqual(400);
    });

    it('should return 400 if password is missing (sad path)', async () => {
      const res = await request(app)
        .post('/api/users/register')
        .send({ name: 'Test User', email: 'test2@test.com' });
      expect(res.statusCode).toEqual(400);
    });
  });

  describe('POST /api/users/login', () => {
    it('should login a user (happy path)', async () => {
      const res = await request(app)
        .post('/api/users/login')
        .send({ email: 'test@test.com', password: 'password' });
      expect(res.statusCode).toEqual(201);
    });

    it('should return 401 if invalid credentials (sad path)', async () => {
      const res = await request(app)
        .post('/api/users/login')
        .send({ email: 'test@test.com', password: 'wrongpassword' });
      expect(res.statusCode).toEqual(400);
    });

    it('should return 400 if missing email (sad path)', async () => {
      const res = await request(app)
        .post('/api/users/login')
        .send({ password: 'password' });
      expect(res.statusCode).toEqual(400);
    });
  });
});