"use client";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-screen w-full gap-6 bg-gray-400">
      <h1 className="text-5xl font-bold">Welcome To Home Page</h1>

      <div className="flex gap-4">
        <Link
          href="/add-user"
          className="px-6 py-3 bg-blue-500 text-white rounded-full"
        >
          Add User
        </Link>

        <Link
          href="/users"
          className="px-6 py-3 bg-green-500 text-white rounded-full"
        >
          Search User
        </Link>
      </div>
    </div>
  );
}
