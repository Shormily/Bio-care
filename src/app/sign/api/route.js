import { connectDB } from "@/app/lib/connectDB";

export const POST = async (request) => {
    
    try {
        const newUser = await request.json();
        console.log("hitting");
        const db = await connectDB();
        console.log("hitting");
        const userCollection =  db.collection('users');
        const exist = await userCollection.findOne({ email: newUser.email });
        if (exist) {
            return Response.json({message:"User Exists"}, {status :304})
        }
        const resp = await userCollection.insertOne(newUser)
        return Response.json({message:"User Created"}, {status: 200})
    } catch (error) {
        return Response.json({ message: "Something went wrong", error }, { status: 500 });
    }
}