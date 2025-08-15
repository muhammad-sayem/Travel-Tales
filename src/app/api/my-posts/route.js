import { authOptions } from "@/lib/authOptions";
import dbConnect, { collectionNames } from "@/lib/dbConnect";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  const session = await getServerSession(authOptions);
  if (session) {
    const loggedInUserEmail = session?.user?.email;
    console.log("Logged in user", loggedInUserEmail);
    const blogsCollection = dbConnect(collectionNames.blogsCollection);

    const query = { bloggerEmail: loggedInUserEmail, status: "Approved" };
    const result = await blogsCollection.find(query).toArray();

    return NextResponse.json(result);
  }
  return NextResponse.json([]);
}