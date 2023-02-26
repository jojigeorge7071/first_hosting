// const express =require('express')
// const mongoose =require('mongoose')
// const app=express()

// const http =require('http')

const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

// Database Name
const dbName = 'myProject';

async function main() {
    // Use connect method to connect to the server
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection('documents');

    // the following code examples can be pasted here...
    const insertResult = await collection.insertMany([{ a: 1 }, { a: 2 }, { a: 3 }]);
    console.log('Inserted documents =>', insertResult);

    return 'done.';
}

main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close());


            // mongoose.connect('mongodb://localhost:27017/mongoose_test_db',{
            //     useNewUrlParser:true,useUnifiedTopology:true
            // },(err)=>{
            //     if(err){
            //         console.log(err)
            //     }else{
            //         console.log('successfully connected')
            //     }
            // })
            // mongoose.set('strictQuery', true)
            // app.listen(3000,()=>{
            //     console.log('on port 3000!!!!');
            // })
            //                         // const myServer = http.createServer((req,res)=>{
                        //     console.log('New request recived');
                        //     res.end('God is Love')
                        // })
                        // myServer.listen(5000,()=>{console.log("server started 5000")})