import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

export default function NavBar() {
  return (
    <div>
      <nav className="text-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] bg-white-800">
        <div className="container flex items-center justify-between h-16 px-4 mx-auto">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Link href="/" className="text-2xl font-bold text-black">
              <img
                src="/logo.png"
                alt="Kangacook Logo"
                className="w-auto h-8"
              />
            </Link>
          </div>

          {/* Links */}
          <div className="flex space-x-4">
            {links.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="p-3 text-gray-700 hover:text-gray-400"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Login/Sign-up */}
          <div className="flex space-x-4">
            <Link href="/login" className="hover:text-gray-400">
              <Button className="bg-[#F79F1A]">login</Button>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

const links = [
  { href: "/", label: "Home" },
  { href: "/recipes", label: "Recipes" },
  { href: "/about", label: "Our Community" },
  { href: "/contact", label: "Contact" },
];
