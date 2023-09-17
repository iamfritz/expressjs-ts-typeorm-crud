import express, { Request, Response } from 'express';
//import { authenticate } from '../middleware/authenticator';
const router = express.Router()

import {
  createTask,
  getTasks,
  getTaskById,
  updateTask,
  deleteTask,
} from '../controllers/TaskController';

// Create routes
router.get('/api/tasks', getTasks);
router.post('/api/tasks', createTask);
router.get('/api/tasks/:id', getTaskById);
router.put('/api/tasks/:id', updateTask);
router.delete('/api/tasks/:id', deleteTask);

module.exports = router
