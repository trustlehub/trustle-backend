import mongoose from "mongoose";

// Define a Mongoose schema for the 'profile' collection
const ImageSchema = new mongoose.Schema({
    email: String,
    id: String,
    photo: String
});

// Create a Mongoose model based on the defined schema
const Image = mongoose.model("Image", ImageSchema);

// Export the Profile model for use in other modules
export default Image;
