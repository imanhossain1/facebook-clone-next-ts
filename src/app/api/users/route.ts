// Next.js থেকে JSON response পাঠানোর জন্য
import { NextResponse } from "next/server";

// MongoDB-এর সাথে কাজ করার জন্য
import { MongoClient } from "mongodb";


// MongoDB connection তৈরি
const client = new MongoClient(process.env.MONGODB_URI!);

// facebook-clone database select
const db = client.db("facebook-clone");


// GET /api/users
// এই URL call হলে function চলবে
export async function GET() {

  try {

    // MongoDB থেকে user data নেওয়া
    const users = await db

      // user collection select
      .collection("user")

      // সব user খুঁজে বের করা
      .find({})

      // শুধু এই ৩টা field নেওয়া
      .project({
        name: 1,
        email: 1,
        image: 1,
      })

      // result-কে JavaScript array বানানো
      .toArray();


    // user data frontend-এ পাঠানো
    return NextResponse.json(users);


  } catch (error) {

    // server console-এ error দেখানো
    console.error("Users error:", error);

    // error response পাঠানো
    return NextResponse.json(
      { message: "Failed to get users" },
      { status: 500 }
    );
  }
}