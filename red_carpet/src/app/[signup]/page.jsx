"use client"
import { useState } from "react";

const SignupForm = () => {
  const [formData, setFormData] = useState({
    name: "",

    idNumber: "",
    studyYear: "",
    department: "",
    program: "",


  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <div className="flex justify-center text-black items-center h-screen bg-gray-100">
      <form 
        onSubmit={handleSubmit} 
        className="bg-white p-6 rounded-lg shadow-md w-96"
      >
        <h2 className="text-xl font-bold mb-4">Signup Form</h2>
        
        <label className="block mb-2">Name</label>
        <input 
          type="text" 
          name="name" 
          value={formData.name} 
          onChange={handleChange} 
          className="w-full p-2 border rounded mb-3"
          required
        />

        
        <label className="block mb-2">ID Number</label>
        <input 
          type="text" 
          name="idNumber" 
          value={formData.idNumber} 
          onChange={handleChange} 
          className="w-full p-2 border rounded mb-3"
          required
        />

        <label className="block mb-2">Mobile Number</label>
        <input 
          type="tel" 
          name="mobile" 
          pattern="^[0-9]{10}$"
          value={formData.mobile} 
          onChange={handleChange} 
          className="w-full p-2 border rounded mb-3"
          required
        />

       

        

        <label className="block mb-2">Program</label>
        <select 
          name="program" 
          value={formData.program} 
          onChange={handleChange} 
          className="w-full p-2 border rounded mb-3"
          required
        >
          <option value="">Select Program</option>
          <option value="B.Tech">B.Tech</option>
          <option value="M.Tech">M.Tech</option>
        </select>
        <label className="block mb-2">Study Year</label>
        <select 
          name="studyYear" 
          value={formData.studyYear} 
          onChange={handleChange} 
          className="w-full p-2 border rounded mb-3"
          required
        >
          <option value="">Select Year</option>
          <option value="First">First</option>
          <option value="Second">Second</option>
          <option value="Third">Third</option>
          <option value="Fourth">Fourth</option>
        </select>

        <label className="block mb-2">Department</label>
        <select 
          name="department" 
          value={formData.department} 
          onChange={handleChange} 
          className="w-full p-2 border rounded mb-3"
          required
        >
          <option value="">Select Department</option>
          <option value="Civil">Civil</option>
          <option value="Computer">Computer</option>
          <option value="Electrical">Electrical</option>
          <option value="Electronics">Electronics</option>
          <option value="Electronics and Communication">Electronics and Communication</option>
          <option value="IT">IT</option>
          <option value="Mechanical">Mechanical</option>
          <option value="Production">Production</option>
          <option value="Structure">Structure</option>
        </select>

        

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