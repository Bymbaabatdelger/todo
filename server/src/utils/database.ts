import mongoose from "mongoose";

export const connetDatabase = async () => {
  try {
    const MONGODB_URL = "mongodb+srv://admin:admin123@url-shortener.zr3sxmw.mongodb.net/?retryWrites=true&w=majority"
    await mongoose.connect(MONGODB_URL);
    console.log("Database connected successfully");
  } catch (error: unknown) {
    console.log(error);
    throw new Error("Database not connected");
  }
};
