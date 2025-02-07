"use client";
<<<<<<< HEAD
import { redirect, useRouter } from "next/navigation";
=======
import { useRouter } from "next/navigation"; // Use useRouter instead of redirect
>>>>>>> fbf3f9d (almost done)
import { useState } from "react";
import { toast } from "react-hot-toast";

const SignupForm = () => {
<<<<<<< HEAD
  const [loading, setLoading] = useState(false);
  const router = useRouter();
=======
  const router = useRouter(); // Initialize router for navigation
>>>>>>> fbf3f9d (almost done)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    clgId: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        toast.success("Signup Successful!");
        setFormData({ email: "", password: "", clgId: "" }); // Reset form
<<<<<<< HEAD
        setTimeout(() => router.push("/"), 500); // Redirect after delay
=======
        router.push("/"); // Redirect to login page correctly
>>>>>>> fbf3f9d (almost done)
      } else {
        const errorMessage = await res.text();
        toast.error(`Error: ${errorMessage}`);
      }

<<<<<<< HEAD
=======
      console.log("Form Submitted:", formData);
>>>>>>> fbf3f9d (almost done)
    } catch (error) {
      console.error("Signup failed:", error);
      toast.error("Something went wrong! Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen text-white">
      <form 
        onSubmit={handleSubmit} 
        className="bg-neutral-900 p-6 flex flex-col justify-center items-center rounded-lg shadow-md w-96"
      >
        <h2 className="text-xl font-bold mb-4">Signup Form</h2>
        
        {/* Email Field */}
        <label className="block mb-2 w-full">
          Email
          <input 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            placeholder="Enter your email address"
            className="w-full p-2 border border-gray-500 rounded mb-3 bg-transparent text-white focus:outline-none focus:border-orange-500"
            required
          />
        </label>

        {/* Password Field */}
        <label className="block mb-2 w-full">
          Password
          <input 
            type="password" 
            name="password" 
            value={formData.password} 
            onChange={handleChange} 
            placeholder="Enter your password"
            className="w-full p-2 border border-gray-500 rounded mb-3 bg-transparent text-white focus:outline-none focus:border-orange-500"
            required
          />
        </label>

        {/* College ID Field */}
        <label className="block mb-2 w-full">
          College ID
          <input 
            type="text" 
            name="clgId" 
            value={formData.clgId} 
            onChange={handleChange} 
            placeholder="Enter your college ID"
            className="w-full p-2 border border-gray-500 rounded mb-3 bg-transparent text-white focus:outline-none focus:border-orange-500"
            required
          />
        </label>

        {/* Submit Button */}
        <button 
          type="submit" 
          disabled={loading}
          className={`w-[70%] bg-orange-500 text-white p-2 rounded-full hover:bg-orange-600 transition ${
            loading && "opacity-50 cursor-not-allowed"
          }`}
        >
          {loading ? "Loading..." : "Signup"}
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
