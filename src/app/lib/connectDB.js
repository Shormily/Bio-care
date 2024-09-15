import { MongoClient, ServerApiVersion } from "mongodb";

let db;
export const connectDB = async () => {
    if (db) return db;
    try {
        const uri = "mongodb://0.0.0.0:27017"
        console.log(uri)
        const client = new MongoClient(uri, {
            serverApi: {
                version: ServerApiVersion.v1,
                strict: true,
                deprecationErrors: true,
            },
        });
        db = client.db('bio-care')
        return db;
        
    } catch (error) {
        console.log(error);
    }
}