"use client";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen w-full gap-6 bg-gray-400 p-4">
      <h1 className="text-3xl md:text-5xl font-bold text-center">
        Welcome To Home Page
      </h1>
      
      <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md sm:w-auto">
        <Link 
          href="/add-user" 
          className="px-6 py-3 bg-blue-500 text-white rounded-full text-center"
        >
          Add User
        </Link>
        <Link 
          href="/users" 
          className="px-6 py-3 bg-green-500 text-white rounded-full text-center"
        >
          Search User
        </Link>
      </div>
    </div>
  );
}
