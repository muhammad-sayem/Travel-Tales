import dbConnect, { collectionNames } from "@/lib/dbConnect"
import { NextResponse } from "next/server";

export const GET = async() => {
  const blogsCollection = dbConnect(collectionNames.blogsCollection);
  const result = await blogsCollection.find({status: "Approved"}).sort({_id: -1}).limit(6).toArray();

  return NextResponse.json(result);
}