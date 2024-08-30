/**
 * MongoDB Database Connection and Configuration
 * 
 * This module handles the setup and configuration of the MongoDB database connection using the Mongoose library.
 * It also exports a function to establish the connection to the database and a constant for the application's port.
 */
import mongoose from "mongoose";
import { DB_NAME, MONGO_URL } from "./config";

/**
 * Establishes a connection to the MongoDB database.
 * 
 * This function sets up a connection to the MongoDB database using the provided `MONGO_URL` configuration.
 * It enforces strict query mode for safer database operations. Upon successful connection, it logs the
 * host of the connected database. In case of connection error, it logs the error message and exits the process.
 */
export const connectDb = async () => {
  try {
    mongoose.set('strictQuery', true);
    if (MONGO_URL) {
      const connection = await mongoose.connect(`${MONGO_URL}/${DB_NAME}`);
      console.log(`MONGODB CONNECTED : ${connection.connection.host}`);
    } else {
      console.log('No Mongo URL')
    }
  } catch (error) {
    console.log(`Error : ${(error as Error).message}`);
    process.exit();
  }
};

/**
 * The port on which the application will listen.
 * 
 * This constant represents the port number on which the application's server will listen for incoming requests.
 * It is exported from the 'config' module and can be used to configure the server to listen on the specified port.
 */
export { PORT } from "./config";

