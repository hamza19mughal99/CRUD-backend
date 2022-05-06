import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI
mongoose.Promise = global.Promise;

mongoose.connect(MONGO_URI).then(()=>{
    console.log('MongoDB Connected')
}).catch((error) => console.log(error.message))

export default mongoose;