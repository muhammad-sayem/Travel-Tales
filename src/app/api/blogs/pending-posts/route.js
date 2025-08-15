import dbConnect, { collectionNames } from "@/lib/dbConnect"
import { NextResponse } from "next/server";

export const GET = async(req) => {
  const blogsCollection = dbConnect(collectionNames.blogsCollection);
  const result = await blogsCollection.find({status: "Pending"}).toArray()
  return NextResponse.json(result);
}