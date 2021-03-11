import express from 'express';
import { itemRouter } from './resources/routes/items.router';

export const restRouter = express.Router();
restRouter.use('/items', itemRouter);
