"use client";

import { useState } from "react";

export default function AddUser() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });

  async function handleSubmit(e) {
    e.preventDefault();
  
    await fetch("http://localhost:3000/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });
    console.log("req send"); 

    setForm({ name: "", email: "", phone: "" });
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-400">
  <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md text-gray-900">
    
    <h2 className="text-xl font-semibold mb-4 text-center text-gray-800">
      Add User
    </h2>

    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      
      <input
        className="border p-2 rounded-md text-black placeholder-gray-400 focus:ring-2 focus:ring-blue-500"
        placeholder="Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />

      <input
        className="border p-2 rounded-md text-black placeholder-gray-400 focus:ring-2 focus:ring-blue-500"
        placeholder="Email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />

      <input
        className="border p-2 rounded-md text-black placeholder-gray-400 focus:ring-2 focus:ring-blue-500"
        placeholder="Phone"
        value={form.phone}
        onChange={(e) => setForm({ ...form, phone: e.target.value })}
      />

      <button className="bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
        Save User
      </button>
    </form>
  </div>
</div>
  );
}