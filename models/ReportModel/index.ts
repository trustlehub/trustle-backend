import mongoose from "mongoose";

// Define a Mongoose schema for the 'report' collection
const reportSchema = new mongoose.Schema({
  name: String, // The name of the person report issue
  email: String, // The email of the person report issue
  phone: String, // The phone number of the person report issue
  description: String // The description of the issue
});

// Create a Mongoose model based on the defined schema
const Report = mongoose.model("report", reportSchema);

// Export the Report model for use in other modules
export default Report;
