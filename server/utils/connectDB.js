import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({ path: "../.env" });
// console.log(process.env.MONGODB_URI);
const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Database Connected");
  } catch (error) {
    console.log("DB Error: " + error);
  }
};

export default dbConnection;