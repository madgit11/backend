import mongoose from "mongoose";

const connectDB=async()=>{
    try{
        const connections=await mongoose.connect (`${process.env.MONGODB_URI}`)
        console.log(`/n Mongodb Connected!!:${connections.connection.host}`)
    }
    catch(error)
    {
        console.log("error occured",error)
        process.exit(1)
    }
}
export default connectDB