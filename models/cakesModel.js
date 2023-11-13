// models/YourModel.js
import mongoose from "mongoose";

const cakes = new mongoose.Schema({
  // Define your schema fields here
  // For example:
  title: String,
  price: Number,
  coverImg:String,
  rating: Number,
  reviewCount: Number,
  location: String,
  openSpots:Number
});

const cakesModel = mongoose.model("cakesModel", cakesModel);

export default cakesModel;