import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      {/* Animated 404 Text */}
      <h1 className="text-[8rem] font-bold tracking-widest animate-bounce ">
        404
      </h1>

      {/* Subheading */}
      <h2 className="text-3xl md:text-4xl font-semibold mt-2 mb-4">
        Oops! Page Not Found
      </h2>

      {/* Description */}
      <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-lg text-center">
        The page you&apos;re looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>

      {/* Return Home Button */}
      <Link href="/">
        <Button className="px-6 py-3 text-lg font-medium bg-white text-indigo-700 rounded-lg shadow-md hover:bg-gray-200 transition-transform transform hover:scale-105">
          🔙 Return Home
        </Button>
      </Link>

      {/* Decorative Elements */}
      <div className="absolute bottom-10 text-gray-300 text-sm">
        &copy; {new Date().getFullYear()} YourWebsite | All rights reserved
      </div>
    </div>
  );
};

export default NotFound;