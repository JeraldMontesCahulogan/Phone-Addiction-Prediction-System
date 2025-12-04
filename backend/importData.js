import dotenv from "dotenv";
import mongoose from "mongoose";
import csv from "csvtojson";
import PhoneAddiction from "./model/phoneAddiction.model.js";

dotenv.config(); // go up one folder to find .env

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected successfully.");
  } catch (err) {
    console.error("Connection error:", err.message);
    process.exit(1);
  }
};

const importData = async () => {
  try {
    await connectDB();

    // Read CSV and convert to JSON
    const jsonArray = await csv().fromFile(
      "C:/1.My Files/Data Analytics/phone_addiction_dataset_balanced.csv"
    );
    console.log(`Converted ${jsonArray.length} records from CSV to JSON.`);

    // Optional: clear collection before inserting
    await PhoneAddiction.deleteMany({});
    console.log("Existing records cleared.");

    // Insert new data
    await PhoneAddiction.insertMany(jsonArray);
    console.log(`Inserted ${jsonArray.length} records successfully.`);

    process.exit();
  } catch (err) {
    console.error("Error importing data:", err.message);
    process.exit(1);
  }
};

importData();
