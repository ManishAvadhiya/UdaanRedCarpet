import { Nominee, User } from "@/model/User"; // Keeping your original import
import connectDB from "@/lib/db";

export async function POST(req) {
  try {
    // Parse request body safely
    const body = await req.json();

    if (!body || !body.actualvalues || !Array.isArray(body.actualvalues)) {
      return new Response(
        JSON.stringify({ error: "Invalid request body!" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const { actualvalues, email } = body;

    if (actualvalues.length !== 9) {
      return new Response(
        JSON.stringify({ error: "Please vote in every category!" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    await connectDB();

    // Check if the user has already voted
    const user = await User.findOne({ email });

    if (!user) {
      return new Response(
        JSON.stringify({ error: "User not found!" }),
        { status: 404, headers: { "Content-Type": "application/json" } }
      );
    }

    if (user.isVoted) {
      return new Response(
        JSON.stringify({ error: "You have already voted!" }),
        { status: 403, headers: { "Content-Type": "application/json" } }
      );
    }

    // Update user as voted
    await User.findOneAndUpdate(
      { email },
      { isVoted: true },
      { new: true }
    );

    // Increment votes for selected nominees
    await Nominee.updateMany(
      { id: { $in: actualvalues } },
      { $inc: { votes: 1 } }
    );

    return new Response(
      JSON.stringify({ message: "Votes recorded successfully!" }),
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
