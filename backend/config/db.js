import mongoose from "mongoose";



let db =async ()=>{
try {
    let conn = await mongoose.connect(process.env.MONGO_URL)
   console.log("Connected to the database")
} catch (error) {
    console.log(error)
}
}
export default db