import mongoose from "mongoose"
import { DB_NAME } from "../constants.js"


const connectDb = async () =>{

    try {
        const connectionInstance = mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`mongoDb Connect !! DB Host : ${connectionInstance}`)
        // console.log(`mongoDb Connect !! DB Host : ${await connectionInstance}`, await connectionInstance)
    } catch (error) {
        console.log("MONGDB CONNECTION ERROR" , error)
        process.exit(1)
        throw  error
    }
}

export default connectDb;