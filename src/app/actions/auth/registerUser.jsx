"use server";
import bcrypt from "bcrypt";
import dbConnect, { collectionNames } from "@/lib/dbConnect";

export const registerUser = async (userData) => {
  try {
    const usersCollection = dbConnect(collectionNames.usersCollection);

    const isExist = await usersCollection.findOne({ email: userData.email });
    if (isExist) {
      throw new Error("User already exists");
    }

    const hashedPassword = await bcrypt.hash(userData.password, 10);
    userData.password = hashedPassword;

    // Check if admin
    const adminEmails = process.env.ADMIN_EMAIL?.split(",") || [];
    userData.role = adminEmails.includes(userData.email) ? "Admin" : "User";

    const result = await usersCollection.insertOne(userData);

    return {
      acknowledged: result.acknowledged,
      insertedId: result.insertedId.toString()
    };
  } catch (error) {
    console.log(error);
    return null;
  }
};
