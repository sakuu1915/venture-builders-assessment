"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bot, Calendar, FileText, Home } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    {
      href: "/",
      label: "Home",
      icon: Home,
    },
    {
      href: "/booking",
      label: "Booking",
      icon: Calendar,
    },
    {
      href: "/ai",
      label: "AI Chat",
      icon: Bot,
    },
    {
      href: "/resume",
      label: "Resume",
      icon: FileText,
    },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-lg border-b shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">

        <Link
          href="/"
          className="text-2xl font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
        >
          Venture Builders
        </Link>

        <nav className="flex gap-2">

          {links.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-300

                ${
                  pathname === item.href
                    ? "bg-blue-600 text-white shadow-lg"
                    : "hover:bg-blue-50 text-gray-700"
                }`}
              >
                <Icon size={18} />
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}