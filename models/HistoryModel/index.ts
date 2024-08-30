import mongoose from "mongoose";

// Define a Mongoose schema for the 'profile' collection
const HistorySchema = new mongoose.Schema({
  email: String,
  verification: Boolean,
  socials: [
    {
      platform: String,
      link: String,
      username: { type: String, default: "" },
      status: { type: Number, default: 0 },
      date: Date, 
      orderNumber: String,
      cnt: Number
    },
  ],
});

// Create a Mongoose model based on the defined schema
const History = mongoose.model("History", HistorySchema);

// Export the Profile model for use in other modules
export default History;
