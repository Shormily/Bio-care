// import { connectDB } from "@/lib/connectDB";

import clientPromise from "@/lib/connectDB";

// export const POST = async (request) => {
//   try {
//     const newUser = await request.json();
//     console.log("hitting");

//     const db = await connectDB();
//     console.log("connected to db");

//     const userCollection = db.collection('users');
//     const exist = await userCollection.findOne({ email: newUser.email });

//     if (exist) {
//       return new Response(JSON.stringify({ message: "User Exists" }), { status: 409 });
//     }

//     await userCollection.insertOne(newUser);
//     return new Response(JSON.stringify({ message: "User Created" }), { status: 200 });

//   } catch (error) {
//     console.error("Error:", error);
//     return new Response(JSON.stringify({ message: "Something went wrong", error }), { status: 500 });
//   }
// };
// import clientPromise from '../../lib/mongodb';

export async function POST(req) {
  try {
    const body = await req.json(); // Parse the request body
    // Handle your database logic here

    return new Response(JSON.stringify({ message: "Success" }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to process request' }), { status: 500 });
  }
}
