import { getAuth } from "@clerk/nextjs/server";
import { Nominee } from "@/model/Nominee";
import { User } from "@/model/User"; // Import User model
import connectDB from "@/lib/db";

export async function POST(req) {
  try {
    const { actualvalues } = await req.json();
    
    // Securely get Clerk user data
    const auth = getAuth(req);
    if (!auth.userId) {
      return new Response(
        JSON.stringify({ error: "Unauthorized" }),
        { status: 401, headers: { "Content-Type": "application/json" } }
      );
    }

    // Get user email from Clerk
    const email = auth.sessionClaims?.email;
    if (!email) {
      return new Response(
        JSON.stringify({ error: "User email not found!" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    if (!Array.isArray(actualvalues) || actualvalues.length !== 9) {
      return new Response(
        JSON.stringify({ error: "Please vote in every category!" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    await connectDB();

    // Increment votes for selected nominees
    await Nominee.updateMany(
      { id: { $in: actualvalues } },
      { $inc: { votes: 1 } }
    );

    // Update user's isVoted status to true
    const updatedUser = await User.findOneAndUpdate(
      { email }, // Find user by email
      { isVoted: true }, // Set isVoted to true
      { new: true } // Return updated document
    );

    if (!updatedUser) {
      return new Response(
        JSON.stringify({ error: "User not found in the database!" }),
        { status: 404, headers: { "Content-Type": "application/json" } }
      );
    }

    return new Response(
      JSON.stringify({ message: "Votes recorded successfully!", email }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );

  } catch (error) {
    console.error("Error:", error);
    return new Response(
      JSON.stringify({ error: "Something went wrong!" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
