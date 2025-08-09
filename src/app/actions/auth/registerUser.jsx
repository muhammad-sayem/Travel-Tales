"use server";
import bcrypt from "bcrypt";
import dbConnect, { collectionNames } from "@/lib/dbConnect";

export const registerUser = async (userData) => {
  try {
    const usersCollection = dbConnect(collectionNames.usersCollction);
    const { password } = userData;

    // Validation //
    const query = { email: userData?.email }
    const isExist = await usersCollection.findOne(query);

    if (!isExist) {
      const hashedPassword = await bcrypt.hash(password, 10);
      userData.password = hashedPassword;
      const result = await usersCollection.insertOne(userData);
      return {
        acknowledged: result.acknowledged,
        insertedId: result.insertedId.toString(),
      };
    }
  }

  catch (error) {
    console.log(error);
    return null;
  }

}