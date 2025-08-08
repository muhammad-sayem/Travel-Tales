import dbConnect, { collectionNames } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export const GET = async(req, {params}) => {
  const p = await params;
  const query = {_id: new ObjectId(p.id)};
  const blogsCollection = dbConnect(collectionNames.blogsCollection);
  const result = await blogsCollection.findOne(query);

  return NextResponse.json(result);
}