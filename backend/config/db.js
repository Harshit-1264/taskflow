import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://harshitkumarmishra5010:taskflow1264@taskflowcluster.2cbem4e.mongodb.net/')
    .then(() => console.log('DB CONNECTED'))
}