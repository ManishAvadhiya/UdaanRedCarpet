import mongoose from "mongoose";
import fs from "fs";
import path from "path";
import { Position, Nominee } from "../model/User.js"; // Adjust the import path as needed
import connectDB from "../lib/db.js"; // Adjust the import path as needed

async function insertPositionsAndNominees() {
  try {
    // Connect to MongoDB
    await connectDB();

    // Read the JSON file
    const filePath = path.resolve("positions.json");
    const positionsData = JSON.parse(fs.readFileSync(filePath, "utf-8"));

    // Loop through each position and its nominees
    for (const positionData of positionsData) {
      // Create a new Position document
      const position = new Position({ name: positionData.name });
      await position.save();

      // Create Nominee documents and link them to the Position
      const nominees = positionData.nominees.map((nominee) => ({
        id: nominee.id,
        name: nominee.name,
        position: position._id, // Link nominee to the position
        imageUrl: nominee.imageUrl,
      }));

      // Insert nominees into the database
      const insertedNominees = await Nominee.insertMany(nominees);

      // Update the Position document with the nominee IDs
      position.nominees = insertedNominees.map((n) => n._id);
      await position.save();
    }

    console.log("✅ Positions & Nominees added successfully!");
  } catch (error) {
    console.error("❌ Error inserting data:", error);
  } finally {
    // Close the MongoDB connection
    mongoose.connection.close();
  }
}

// Run the function
insertPositionsAndNominees();