const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

async function getDatabase(){
    const client = await MongoClient.connect('mongodb://127.0.0.1:27017');
    let database = client.db('skills');
    if (!database) {
        console.log('Database not connected');
    }
    return database;
}
module.exports = {
    getDatabase
}