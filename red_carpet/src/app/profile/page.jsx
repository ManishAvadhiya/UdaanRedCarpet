"use client";

import { useUser } from "@clerk/nextjs";
import { useState } from "react";

export default function Profile() {
  const { user } = useUser();
  const [message, setMessage] = useState("");

  const handleVote = async () => {
    if (!user) {
      setMessage("User not authenticated!");
      return;
    }

    const email = user.primaryEmailAddress?.emailAddress; // Get user email

    const response = await fetch("/api/random", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }), // Send only email
    });

    const data = await response.json();
    setMessage(data.message || data.error);
  };

  return (
    <div>
      <h1>Profile Page</h1>
      <p>Email: {user?.primaryEmailAddress?.emailAddress || "Not available"}</p>
      <button onClick={handleVote}>Confirm Vote</button>
      <p>{message}</p>
    </div>
  );
}
