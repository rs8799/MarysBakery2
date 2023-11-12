// pages/api/getData.js
import dbConnect from "../../utils/dbConnect";
import cakesModel from "../../models/cakesModel";

export default async function handler(req, res) {
  await dbConnect();

  try {
    const data = await cakesModel.find({}); // Modify this query based on your model
    res.status(200).json({ data });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}