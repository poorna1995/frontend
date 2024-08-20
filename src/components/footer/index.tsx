import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div>
      <footer className="py-4 text-white bg-gray-100">
        <div className="container flex flex-col items-center justify-between mx-auto md:flex-row">
          <div className="flex items-center mb-4 md:mb-0">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="Kangacook Logo"
                width={150}
                height={50}
                className="mr-4"
              />
              <p className="text-gray-700">Sharing recipes with love</p>
            </Link>
          </div>
          <nav className="flex flex-col md:flex-row">
            {navigationLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="mx-2 text-gray-700 hover:text-white"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-700">
            &copy; {new Date().getFullYear()} Kangacook. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

const navigationLinks = [
  { href: "/", label: "Home" },
  { href: "/recipes", label: "Recipes" },
  { href: "/about", label: "Our Community" },
  { href: "/contact", label: "Contact" },
];
