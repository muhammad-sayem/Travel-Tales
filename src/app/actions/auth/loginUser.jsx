'use server';
import bcrypt from "bcrypt";

import dbConnect, { collectionNames } from "@/lib/dbConnect"

export const loginUser = async (userData) => {
  const usersCollction = dbConnect(collectionNames.usersCollction);
  const { password } = userData;
  const query = { email: userData?.email }

  const user = usersCollction.findOne(query);
  if(!user){
    return null;
  }

  const isPasswordOk = bcrypt.compare(user?.password, password);
  if(!isPasswordOk){
    return null;
  }

  return user;
}