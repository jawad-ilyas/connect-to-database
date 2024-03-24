// when you work with database always connect with aysnc await , try catch also for error handling 
import connectDb from "./db/index.db.js";
// require('dotenv').config({path : './env'})
import dotenv from "dotenv"


dotenv.config({
    path:"./env"
})
connectDb();
 



















    // always use ; (semi colon) before the iffi 
    // ; (async() => {

    //     try {
    //         await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
    //     } catch (error) {
    //         console.log("Error into Db COnnection", error)
    //         throw error;
    //     }
    // })()
