const { MongoClient } = require('mongodb');
const uri = "your-mongodb-connection-string"; // Replace with your MongoDB connection string

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function connectDB() {
    try {
        await client.connect();
        console.log("Connected to MongoDB");
        // Perform a simple command to verify the connection
        const admin = client.db().admin();
        const info = await admin.serverStatus();
        console.log("Database info:", info);
    } catch (err) {
        console.error("Failed to connect to MongoDB", err);
    }
}

module.exports = connectDB;
