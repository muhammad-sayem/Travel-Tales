import { authOptions } from "@/lib/authOptions";
import dbConnect, { collectionNames } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export const GET = async(req, {params}) => {
  const p = await params;
  const query = {_id: new ObjectId(p.id)};
  const blogsCollection = dbConnect(collectionNames.blogsCollection);
  const singleBlogData = await blogsCollection.findOne(query);
  console.log("Single Blog Data ---->", singleBlogData);

  const session = await getServerSession(authOptions);
  const email = session?.user?.email;

  const isBloggerOk = email === singleBlogData?.bloggerEmail;

  if(isBloggerOk){
    return NextResponse.json(singleBlogData);
  }
  else{
    return NextResponse.json({success: false, message: "Forbidden Access!"});
  }
}

export const PUT = async(req, {params}) => {
  const p = await params;
  const query = {_id: new ObjectId(p.id)};
  const blogsCollection = dbConnect(collectionNames.blogsCollection);

  const singleBlogData = await blogsCollection.findOne(query);
  const session = await getServerSession(authOptions);
  const email = session?.user?.email;
  const updatedData = await req.json();

  const isBloggerOk = email === singleBlogData?.bloggerEmail;

  if(isBloggerOk){
    const updateDoc = {
      $set: {
        ...updatedData
      }
    }
    const result = await blogsCollection.updateOne(query, updateDoc);
    return NextResponse.json({success: true})
  }
  else{
    NextResponse.json({success: false, message: "Forbidden Access!!"})
  }
}