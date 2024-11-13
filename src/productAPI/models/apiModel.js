// src/productAPI/models/apiModel.js
import mongoose from 'mongoose';

// Define the schema for the product data
const apiSchema = new mongoose.Schema({
  name: { type: String, required: true },
  sku: { type: String, required: true },
  brand: { type: String },
  price: { type: Number },
  inStock: { type: Boolean },
}, { timestamps: true });  // Adds createdAt and updatedAt fields automatically

// Create and export the model
const ApiModel = mongoose.model('Product', apiSchema);

export default ApiModel;
