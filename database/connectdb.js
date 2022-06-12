import mongoose from "mongoose";

try {
    await mongoose.connect(process.env.URI_MONGO)
    console.log("CONNECT DB OK")
} catch (error) {
    console.log("Error " + error)
}