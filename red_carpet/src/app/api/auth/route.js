import { User } from "@/model/User";
import connectDB from "@/lib/db";

export async function POST(req) {
  try {
    // Parse request body
    const { email, password, clgId } = await req.json();

    // Validate required fields
    if (!email || !password || !clgId) {
      return new Response(
        JSON.stringify({ error: "All fields are required!" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // Connect to the database
    await connectDB();

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return new Response(
        JSON.stringify({ error: "User already exists!" }),
        { status: 409, headers: { "Content-Type": "application/json" } }
      );
    }

    // Create new user
    const newUser = new User({
      email,
      password, // ⚠️ Password is stored as plain text (not secure)
      clgId
    });

    await newUser.save();

    // Return success response
    return new Response(
      JSON.stringify({
        message: "User registered successfully!",
        user: { id: newUser._id, email: newUser.email, clgId: newUser.clgId }
      }),
      { status: 201, headers: { "Content-Type": "application/json" } }
    );

  } catch (error) {
    console.error("Error:", error);
    return new Response(
      JSON.stringify({ error: "Something went wrong!" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
