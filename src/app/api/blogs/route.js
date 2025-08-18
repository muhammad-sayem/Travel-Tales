import dbConnect, { collectionNames } from "@/lib/dbConnect";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  const blogData = await req.json();
  const blogsCollection = dbConnect(collectionNames.blogsCollection);
  const result = await blogsCollection.insertOne(blogData);

  return NextResponse.json(result);
}

export const GET = async (req) => {
  const blogsCollection = dbConnect(collectionNames.blogsCollection);
  const result = await blogsCollection.find({status: "Approved"}).toArray();
  return NextResponse.json(result);
}