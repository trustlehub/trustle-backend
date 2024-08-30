import mongoose from "mongoose";

// Define a Mongoose schema for the 'report' collection
const transactionSchema = new mongoose.Schema({
  email: String, // The email of the person report issue
  amount: Number,
  cnt: Number,
  paymentId: String,
  date: { type: Date, dafault: Date.now(), require: false },
});

// Create a Mongoose model based on the defined schema
const transaction = mongoose.model("transactions", transactionSchema);

// Export the Report model for use in other modules
export default transaction;
