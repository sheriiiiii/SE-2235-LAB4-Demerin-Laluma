import express from 'express';
import mongoose from 'mongoose';
import taskRoutes from './routes/taskRoute.js';
import userRoutes from './routes/userRoute.js';

const app = express();
app.use(express.json());

// Only connect to real DB if not in test environment
if (process.env.NODE_ENV !== 'test') {
  mongoose.set('strictQuery', false);
  mongoose.connect(process.env.MONGO_URI, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
  })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => {
    console.error('MongoDB Connection Error:', err);
    process.exit(1);
  });
}

app.use('/api/tasks', taskRoutes);
app.use('/api/users', userRoutes);

// Export app without listening for tests
export default app;