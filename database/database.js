import mongoose from "mongoose";

function connectDB(){
    mongoose.connect(process.env.MONGO_URI , {
    dbname :"backend-api",
})
.then(()=> console.log("datbase connected"))
.catch((err)=>console.log(err));
}

export default connectDB;