import dbConnect, { collectionNames } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export const PATCH = async (req, { params }) => {
  const p = await params;
  const blogsCollection = dbConnect(collectionNames.blogsCollection);
  const query = {_id: new ObjectId(p.id)};

  const updateDoc = {
    $set: {
      status: "Approved"
    }
  }

  const result = await blogsCollection.updateOne(query, updateDoc);
  revalidatePath('/admin-dashboard/pending-posts');
  return NextResponse.json(result);
}

export const DELETE = async (req, { params }) => {
  const p = await params;
  const blogsCollection = dbConnect(collectionNames.blogsCollection);
  const query = { _id: new ObjectId(p.id) };;

  const result = await blogsCollection.deleteOne(query);
  revalidatePath('/admin-dashboard/pending-posts');
  return NextResponse.json(result);
}