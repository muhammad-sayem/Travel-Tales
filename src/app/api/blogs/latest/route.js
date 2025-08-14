import dbConnect, { collectionNames } from "@/lib/dbConnect"
import { NextResponse } from "next/server";

export const GET = async() => {
  const blogsCollection = dbConnect(collectionNames.blogsCollection);
  const result = await blogsCollection.find().sort({_id: -1}).limit(3).toArray();

  return NextResponse.json(result);
}