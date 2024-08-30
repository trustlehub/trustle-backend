import mongoose from "mongoose";

// Define a Mongoose schema for the 'user' collection
const userSchema = new mongoose.Schema({
  name: String, // Name of the user
  email: String, // Email of the user
  password: String, // Password of the user
  social: String,
  avatar: String,
  status: Boolean,
  credit: { type: Number, default: 5 },
  accept: { type: Boolean, default: false },
  cnt: { type: Number, default: 0 },
  today: Boolean,
  logdate: Date,
  location: String, // Location of the user
  phone: String, // Phone number of the user
  admin: {
    // Admin permmisionality
    type: Boolean,
    default: false,
  },
  verification: Boolean, // Two verify status
  verifyCode: Number, // Two verify Code
  socials: [
    {
      platform: String,
      links: String,
      username: String,
      accuntType: Number,
      status: { type: Number, default: 0 }, // 0: init, 1: progress, 2: finish
      date: Date,
      orderNumber: String,
      cnt: Number
    },
  ],
});

// Create a Mongoose model based on the defined schema
const UserModel = mongoose.model("user", userSchema);

// Export the Profile model for use in other modules
export default UserModel;
