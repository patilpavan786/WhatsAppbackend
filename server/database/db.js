import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config();
const USERNAME = process.env.DB_USERNAME
const PASSWORD= process.env.DB_PASSWORD
 
const Connection = async ()=>{
    const URL = `mongodb://${USERNAME}:${PASSWORD}@ac-kx7kxom-shard-00-00.y3pd8zs.mongodb.net:27017,ac-kx7kxom-shard-00-01.y3pd8zs.mongodb.net:27017,ac-kx7kxom-shard-00-02.y3pd8zs.mongodb.net:27017/?ssl=true&replicaSet=atlas-5shhdg-shard-0&authSource=admin&retryWrites=true&w=majority`
    try{
      await mongoose.connect(URL, { useUnifiedTopology: true})
   console.log("Database connected sucessfully ")
   
    }catch(error){
      console.log(`error while connecting the data base  ${error.message}`)
    }
}

export default Connection;

