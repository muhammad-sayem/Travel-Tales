"use server";
import bcrypt from "bcrypt";
import dbConnect, { collectionNames } from "@/lib/dbConnect";

export const loginUser = async ({ email, password }) => {
  const usersCollection = dbConnect(collectionNames.usersCollection);
  const user = await usersCollection.findOne({ email });

  if (!user) return null;

  const isPasswordOk = await bcrypt.compare(password, user.password);
  if (!isPasswordOk) return null;

  return user;
};
