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

router
  .route("/")
  .get(getTasks)
  .post(createTask);

router
  .route("/:id")
  .get(getTaskById)
  .delete(deleteTask)
  .put(updateTask);

module.exports = router
