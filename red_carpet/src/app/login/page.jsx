"use client";
import { redirect } from "next/navigation";
import { useState } from "react";

const SignupForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    clgId: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert("Vote Cast Successfully!");
        setFormData({ email: "", password: "", clgId: "" }); // Reset form
      } else {
        const errorMessage = await res.text();
        alert(`Error: ${errorMessage}`);
      }

      console.log("Form Submitted:", formData);
      redirect("/login");
    } catch (error) {
      console.error("Signup failed:", error);
      alert("Something went wrong! Please try again.");
    }
  };

  return (
    <div className="flex justify-center text-black items-center h-screen bg-gray-100">
      <form 
        onSubmit={handleSubmit} 
        className="bg-white p-6 rounded-lg shadow-md w-96"
      >
        <h2 className="text-xl font-bold mb-4">Signup Form</h2>
        
        {/* Email Field */}
        <label className="block mb-2">Email</label>
        <input 
          type="email" 
          name="email" 
          value={formData.email} 
          onChange={handleChange} 
          className="w-full p-2 border rounded mb-3"
          required
        />

        {/* Password Field */}
        <label className="block mb-2">Password</label>
        <input 
          type="password" 
          name="password" 
          value={formData.password} 
          onChange={handleChange} 
          className="w-full p-2 border rounded mb-3"
          required
        />

        {/* College ID Field */}
        <label className="block mb-2">College ID</label>
        <input 
          type="text" 
          name="clgId" 
          value={formData.clgId} 
          onChange={handleChange} 
          className="w-full p-2 border rounded mb-3"
          required
        />

        {/* Submit Button */}
        <button 
          type="submit" 
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Signup
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
