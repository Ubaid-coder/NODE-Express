import mongoose from "mongoose";

export async function connectDB() {

  try {
    await mongoose.connect('mongodb://localhost:27017/FilesDB');
    console.log("Database connected");
  } catch (error) {
    console.log("DB ERROR:", error);
  }
}
