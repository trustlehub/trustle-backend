import { Router } from "express";
import ReportModel from "../../models/ReportModel";

// Create a new router instance
const reportRouter = Router();

/**
 * Handles route to add a new report
 * @param {Object} req - Express request object containing user input data.
 * @param {Object} res - Express response object for sending HTTP responses.
 */
reportRouter.post("/add", async (req: any, res: any) => {
    // Create a new ReportModel instance using the data from the request body
    const newReport = new ReportModel(req.body);
    
    try {
        // Save the new report to the database
        const result = await newReport.save();
        
        if (result != null) {
            console.log("Success report issue");
            res.status(200).json({ msg: "Success", data: result._id.toString() });
        } else {
            console.log("Failed");
            res.status(400).json({ msg: "Failed" });
        }
    } catch (err) {
        console.warn({ error: err });
        res.status(500).json({ error: err });
    }
});

/**
 * Handles route to retrieve a report by ID
 * @param {Object} req - Express request object containing user input data.
 * @param {Object} res - Express response object for sending HTTP responses.
 */
reportRouter.get("/:id", async (req: any, res: any) => {
    const id = req.params.id;
    
    try {
        // Find a report in the database by its ID
        const result = await ReportModel.findById(id);
        
        if (result != null) {
            console.log("Successfully retrieved report");
            res.status(200).json({ msg: "Success", data: result });
        } else {
            console.log("Issue not found");
            res.status(404).json({ msg: "Issue not found" });
        }
    } catch (err) {
        console.warn({ error: err });
        res.status(500).json({ error: err });
    }
});

/**
 * Handles route to retrieve all report
 * @param {Object} req - Express request object containing user input data.
 * @param {Object} res - Express response object for sending HTTP responses.
 */
reportRouter.get("/", async (req: any, res: any) => {
    try {
        // Find a report in the database by its ID
        const result = await ReportModel.find({});
        
        if (result != null) {
            console.log("Successfully retrieved report");
            res.status(200).json({ msg: "Success", data: result });
        } else {
            console.log("Issue not found");
            res.status(404).json({ msg: "Issue not found" });
        }
    } catch (err) {
        console.warn({ error: err });
        res.status(500).json({ error: err });
    }
});

// Export the router instance for use in other parts of the application
export default reportRouter;
