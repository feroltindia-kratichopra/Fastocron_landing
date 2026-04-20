"use client";

import { useState } from "react";
import Link from "next/link";
import { MenuItem, Menu } from "../ui/navbar-menu";
import { Menu as MenuIcon, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Navbar() {
  const [active, setActive] = useState<string | null>(null);
  const [open, setOpen] = useState(false);

  const navlink = [
    { label: "Home", href: "/" },
    { label: "Features", href: "/features" },
    { label: "Application", href: "/useCases" },
    { label: "Integrations", href: "/Integrations" },
    // { label: "Pricing", href: "/pricing" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <div className="fixed left-0 right-0 top-0 z-50">
      <header className="w-full">
        {/* DESKTOP NAVBAR */}
        <nav className="hidden w-full items-center justify-between border-b border-white/10 bg-[#0B1120]/80 px-6 py-3 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.5)] backdrop-blur-xl lg:flex">
          {/* Logo */}
          <Link
            href="/"
            className="text-lg font-bold tracking-tight bg-gradient-to-r from-cyan-300 to-indigo-300 bg-clip-text text-transparent"
          >
            FastOcron
          </Link>

          {/* Center Menu */}
          <div className="flex flex-1 justify-center">
            <Menu
              setActive={setActive}
              className=" bg-[#0B1120]/80 py-4 text-slate-300 shadow-none "
            >
              {navlink.map((link) => (
                <MenuItem
                  key={link.label}
                  item={link.label}
                  setActive={setActive}
                  active={active}
                  href={link.href}
                  className="text-slate-300 hover:text-white"
                />
              ))}
            </Menu>
          </div>

          {/* CTA */}
          <button className="rounded-full border border-cyan-500/30 bg-gradient-to-r from-cyan-500/20 to-indigo-600/20 px-5 py-2 text-sm font-medium text-white transition hover:scale-[1.02]">
            Sign in
          </button>
        </nav>

        {/* MOBILE NAVBAR */}
        <nav className="flex items-center justify-between border-b border-white/10 bg-[#0B1120]/85 px-4 py-4 backdrop-blur-xl lg:hidden">
          <Link
            href="/"
            className="text-lg font-bold tracking-tight bg-gradient-to-r from-cyan-300 to-indigo-300 bg-clip-text text-transparent"
          >
            FastOcron
          </Link>

          <button
            onClick={() => setOpen(true)}
            className="rounded-xl border border-white/10 bg-white/5 p-2 text-white"
          >
            <MenuIcon className="h-5 w-5" />
          </button>
        </nav>

        {/* MOBILE SIDEBAR */}
        <AnimatePresence>
          {open && (
            <>
              {/* Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setOpen(false)}
                className="fixed inset-0 bg-black/50 backdrop-blur-sm lg:hidden"
              />

              {/* Sidebar */}
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="fixed right-0 top-0 h-screen w-[82%] max-w-sm border-l border-white/10 bg-[#0B1120] p-6 shadow-2xl lg:hidden"
              >
                {/* Top */}
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold bg-gradient-to-r from-cyan-300 to-indigo-300 bg-clip-text text-transparent">
                    FastOcron
                  </span>

                  <button
                    onClick={() => setOpen(false)}
                    className="rounded-xl border border-white/10 bg-white/5 p-2 text-white"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                {/* Links */}
                <div className="mt-10 space-y-3">
                  {navlink.map((link, i) => (
                    <motion.div
                      key={link.label}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className="block rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-slate-200 transition hover:bg-white/10 hover:text-white"
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* CTA */}
                <div className="mt-8">
                <Link
                  href="https://dev.fastocron.com/signin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full rounded-full bg-gradient-to-r from-cyan-400 to-indigo-500 px-5 py-3 text-center text-sm font-semibold text-slate-950"
                >
                  Sign in
                </Link>
              </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </header>
    </div>
  );
}