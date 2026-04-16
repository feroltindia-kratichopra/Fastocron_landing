"use client";
import { useState } from "react";
import { MenuItem, Menu } from "./ui/navbar-menu";
import Link from "next/link";
export default function Navbar() {
  const [active, setActive] = useState<string | null>(null);
  const navlink = [
    { label: "About", href: "#about" },
    { label: "Features", href: "#features" },
    // { label: "How It Works", href: "#how-it-works" },
    { label: "Integrations", href: "#integrations" },
    { label: "Pricing", href: "/pricing" },
    { label: "Contact", href: "/contact" },
  ];
  return (
    <div className="fixed top-10 left-0 right-0 z-50 ">
    <header className="mx-auto w-full max-w-6xl">
      <nav className="rounded-full bg-white/95 px-3  shadow-md ring-1 ring-gray-200 backdrop-blur">
        <div className="grid grid-cols-3 items-center">
          <div className="justify-self-start text-lg  font-bold">
          <Link href="/" className="hover:text-black  transition">
            FastOcron
          </Link>  
          </div>
          <div className="justify-self-center">
            <Menu setActive={setActive}>
              {navlink.map((link) => (
                <MenuItem
                  key={link.label}
                  item={link.label}
                  setActive={setActive}
                  active={active}
                  href={link.href}
                />
              ))}
            </Menu>
          </div>
          <div className="justify-self-end">
            <button
              type="button"
              className="rounded-full bg-gray-900 px-5 py-2 text-sm font-medium text-white transition hover:bg-black"
            >
              Sign in
            </button>
          </div>
        </div>
      </nav>
    </header>
    </div>
  );
}
