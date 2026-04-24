"use client";

import { useState, useEffect } from "react";

export default function UsersPage() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function fetchUsers(email = "") {
    try {
      setLoading(true);
      setError("");

      const res = await fetch(`/api/users?email=${email}`);

      
      if (!res.ok) {
        const text = await res.text();
        throw new Error(text || "Failed to fetch users");
      }

      const data = await res.json();

      if (!data.success) {
        throw new Error(data.error || "Something went wrong");
      }

      setUsers(data.data);
    } catch (err) {
      console.error("Fetch Error:", err.message);
      setError(err.message);
      setUsers([]);
    } finally {
      setLoading(false);
    }
  }

  // initial load of user data
  useEffect(() => {
    fetchUsers();
  }, []);

  //protect from frequent db request
  useEffect(() => {
    const delay = setTimeout(() => {
      fetchUsers(search);
    }, 400);

    return () => clearTimeout(delay);
  }, [search]);

  return (
    <div className="p-6 bg-gray-400 min-h-screen">
      <h2 className="text-2xl font-semibold mb-4">Users</h2>

      {/* Search */}
      <input
        className="border p-2 rounded-md mb-6 w-full max-w-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Search by email..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      
      {loading && <p className="text-blue-500">Loading...</p>}

    
      {error && <p className="text-red-500">{error}</p>}

    
      {!loading && users.length === 0 && !error && (
        <p className="text-gray-500">No users found</p>
      )}

     
      <div className="grid md:grid-cols-3 gap-4 h-50">
        {users.map((u) => (
          <div
            key={u._id}
            className="bg-gray-300 p-4 rounded-xl shadow hover:shadow-md transition flex flex-col justify-center items-center gap 3"
          >
            <h3 className="text-lg text-black font-bold">Name : {u.name}</h3>
            <p className="text-gray-600">Email : {u.email}</p>
            <p className="text-gray-500">Mob No : {u.phone}</p>
          </div>
        ))}  
      </div>
    </div>
  );
}