/**
 * Middleware for User Authentication and Authorization (isLoggedIn)
 *
 * This middleware function is designed to be used in routes where user authentication and authorization
 * are required. It checks for a valid JWT token in the request headers, verifies the token's authenticity
 * using the provided SECRET_KEY, and extracts the user payload from the token. The extracted user data is
 * then stored in the request object for downstream use in the route handlers.
 *
 * The middleware performs the following steps:
 * 1. Checks if the 'Authorization' header is present in the request.
 * 2. If the header is present, it extracts the token from the header.
 * 3. It verifies the token using JWT's `verify` method and the provided SECRET_KEY.
 * 4. If the token is successfully verified, the user payload is extracted from it.
 * 5. The extracted user payload is stored in the `req.user` property for use in subsequent route handlers.
 * 6. If any step of the verification process fails, appropriate error responses are sent to the client.
 */

import dotenv from 'dotenv';
import jwt from "jsonwebtoken";
dotenv.config();

/**
 * @middleware isLoggedIn
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next middleware function
 * @throws {Object} - Sends appropriate error responses if token validation fails
 */
export const isLoggedIn = async (req: any, res: any, next: any) => {
  try {
    // Check if 'Authorization' header is present in the request
    console.log(req)
    if (req.headers.authorization) {
      const token = req.headers.authorization; // Extract the token from the header
      if (token) {
        // Verify the token using the provided SECRET_KEY
        const payload = await jwt.verify(token, process.env.SECRET_KEY || "");
        if (payload) {
          // Store user data in the request object and proceed to the next middleware/handler
          req.user = payload;
          next();
        } else {
          // If token verification fails, send a 401 Unauthorized response
          console.log("Token Verification Failed");
          res.status(401).json({ error: "Token Verification Failed" });
        }
      } else {
        // If token is missing or malformed, send a 400 Bad Request response
        console.log("Malformed Auth Header");
        res.status(400).json({ error: "Malformed Auth Header" });
      }
    } else {
      // If 'Authorization' header is missing, send a 401 Unauthorized response
      console.log("No Authorization Header");
      res.status(401).json({ error: "No Authorization Header" });
    }
  } catch (error) {
    // If token validation results in an error, send a 400 Bad Request response
    console.log("Invalid Token" );
    res.status(400).json({ error: "Invalid Token" });
  }
};
