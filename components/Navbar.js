"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-gray-800 text-white shadow-md rounded-10xl">
      <Link href="/" className="text-2xl font-semibold">
      User Manager
      </Link>

      <div className="flex gap-6">
        <Link href="/users" className="hover:text-gray-300">Users</Link>
        <Link href="/add-user" className="hover:text-gray-300">Add User</Link>
      </div>
    </nav>
  );
}