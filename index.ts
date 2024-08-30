import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import swaggerUi from "swagger-ui-express";
import { PORT, connectDb as connectMongoDB } from "./config";
import Profile from "./routes/ProfileRoute";
import Report from "./routes/ReportRoute";
import User from "./routes/UserRoute";
import Stripe from "./routes/StripeRoute";
import History from "./routes/HistoryRoute";
import Image from "./routes/ImageRoute";
import Search from "./routes/SearchRoute";

// Swagger UI configuration
const swaggerDocument = require("./swagger.json");

// Load environment variables from .env file
dotenv.config();

// Connect to the MongoDB database
connectMongoDB();

// Create an instance of the Express application
const app = express();

// Set up Cross-Origin Resource Sharing (CORS) options
app.use(cors());

// Parse incoming JSON requests using body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Swagger UI router configuration
app.use("/api/v1/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Define routes for different API endpoints
app.use("/api/v1/users", User);
app.use("/api/v1/profile", Profile);
app.use("/api/v1/report", Report);
app.use("/api/v1/stripe", Stripe);
app.use("/api/v1/history", History);
app.use("/api/v1/iamge", Image);
app.use("/api/v1/search", Search);

// Define a route to check if the backend server is running
app.use("/", async (req: any, res: any) => {
  res.send("Backend Server is Running !");
});

// Start the Express server to listen on the specified port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
