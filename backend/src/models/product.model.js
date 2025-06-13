import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: String,
  batch: String,
  quantity: Number,
  mrp: Number,
  ptr: Number,
  expiry: Date,
}, { timestamps: true });

export default mongoose.model('Product', productSchema);
