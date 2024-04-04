const { MongoClient } = require('mongodb');

// MongoDB connection URI
const uri = 'mongodb://localhost:27017'; // Update with your MongoDB connection URI

// Create a MongoDB client
const client = new MongoClient(uri);

// Connect to MongoDB
async function connectToMongoDB() {
    try {
        await client.connect();
        console.log('Connected to MongoDB');
        return client.db('your_database_name'); // Replace 'your_database_name' with your database name
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

module.exports = connectToMongoDB;
