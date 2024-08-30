import mongoose from "mongoose";

// Define a Mongoose schema for the 'profile' collection
const SearchSchema = new mongoose.Schema({
    email: String,
    socials: [{
        platform: String,
        links: String,
        status: { type: Number, default: 0 }
    }]
});

// Create a Mongoose model based on the defined schema
const Search = mongoose.model("Search", SearchSchema);

// Export the Profile model for use in other modules
export default Search;
