// src/controllers/TaskController.ts

import express, { Request, Response } from 'express';
import { db } from '../database/databaseConnector';
import { Task } from '../database/entities/Task';

let result = {
  status: "error",
  message: "",
  data: {},
};

export const createTask = async (req: Request, res: Response) => {
  const taskRepository = await db.getRepository(Task);
  const { title, description, completed } = req.body;
  const task = new Task();
  task.title = title;
  task.description = description;
  task.completed = completed;

  try {
    await taskRepository.save(task);

    result.status = "success";
    result.data   = task;
    return res.status(201).json(result);
  } catch (error) {
    return res.status(500).json({ error: 'Failed to create task' });
  }
};

export const getTasks = async (_req: Request, res: Response) => {
  const taskRepository = await db.getRepository(Task);
  try {
    const tasks = await taskRepository.find();
    result.status = "success";
    result.data   = tasks;
    return res.json(result);
  } catch (error) {
    return res.status(500).json({ error: 'Failed to fetch tasks' });
  }
};

export const getTaskById = async (req: Request, res: Response) => {
  const taskRepository = await db.getRepository(Task);
  const taskId = req.params.id;
  try {        
    const task = await taskRepository.findOneById(taskId);
    if (!task) {
      return res.status(404).json({ error: 'Task not found' });
    }

    result.status = "success";
    result.data   = task;
    return res.json(result);
  } catch (error) {
    return res.status(500).json({ error: 'Failed to fetch task' });
  }
};

export const updateTask = async (req: Request, res: Response) => {
  const taskRepository = await db.getRepository(Task);
  const taskId = req.params.id;
  const { title, description, completed } = req.body;
  try {
    const task = await taskRepository.findOneById(taskId);
    if (!task) {
      return res.status(404).json({ error: 'Task not found' });
    }
    task.title = title;
    task.description = description;
    task.completed = completed;
    await taskRepository.save(task);

    result.status = "success";
    result.data   = task;
    return res.json('result');
  } catch (error) {
    return res.status(500).json({ error: 'Failed to update task' });
  }
  return res.status(500).json({ error: 'Failed to update task' });
};

export const deleteTask = async (req: Request, res: Response) => {
  const taskRepository = await db.getRepository(Task);
  const taskId = req.params.id;
  try {
    const task = await taskRepository.findOneById(taskId);
    if (!task) {
      return res.status(404).json({ error: 'Task not found' });
    }
    let deleteTask = await taskRepository.remove(task);
    res.status(204).send();
  } catch (error) {
    return res.status(500).json({ error: 'Failed to delete task' });
  }
  return res.status(500).json({ error: 'Failed to update task' });
};
