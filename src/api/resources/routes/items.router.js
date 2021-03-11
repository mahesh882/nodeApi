import express from 'express';
import itemsController from '../controllers/items.controller';

export const itemRouter = express.Router();
//@ fetch all item's api
  itemRouter
  .route('/')
  .get(itemsController.getAllRecords);
//@ insert item with validation api
  itemRouter.route('/addItem')
  .post(itemsController.create)
//@ insert 100 static record's api
  itemRouter
  .route('/addStaticData')
  .get(itemsController.insertSaticData);
