import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate';

//@ create database table schema
const { Schema } = mongoose;
const itemsSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Item must have name'],
  },
  url: {
    type: String,
    required: [true, 'Item must have image url'],
  },
  city: {
    type: String,
    required: [true, 'Item must have city name'],
  }
  ,location: {
    type: String,
    required: [true, 'Item must have location address'],
  },

 
});
itemsSchema.plugin(mongoosePaginate);
export default mongoose.model('Items', itemsSchema);
