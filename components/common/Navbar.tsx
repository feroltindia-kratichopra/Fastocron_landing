"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
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
    { label: "Contact", href: "/contact" },
  ];

  return (
    <div className="fixed left-0 right-0 top-0 z-50">
      <header className="w-full">
        {/* DESKTOP NAVBAR */}
        <nav className="relative hidden w-full items-center justify-between border-b border-slate-200/80 bg-white/85 px-15  shadow-sm shadow-slate-200/50 backdrop-blur-xl lg:flex">
          {/* Logo */}
          <div className="flex items-center justify-center">
          <Link
            href="/"
            className=" relative flex w-[350px] h-[80px] items-center text-lg  font-bold tracking-tight bg-gradient-to-r from-cyan-600 to-indigo-600 bg-clip-text text-transparent"
          >
              <Image
                src="/fastocron.png"   
                alt="FastOcron Logo"
                width={180}
                height={20}
                className="object-contain "
              />
           

            
          </Link>
        </div>

          {/* Center Menu */}
          <div className="flex flex-1 justify-center absolute left-1/2 -translate-x-1/2 ">
            <Menu
              setActive={setActive}
              className="border border-slate-200/90 bg-gradient-to-b from-white via-slate-50 to-sky-50/40 py-4 text-slate-700 shadow-sm"
            >
              {navlink.map((link) => (
                <MenuItem
                  key={link.label}
                  item={link.label}
                  setActive={setActive}
                  active={active}
                  href={link.href}
                  className="text-slate-600 hover:text-slate-900 !font-semibold"
                />
              ))}
            </Menu>
          </div>

          {/* CTA */}
          <a
            href="https://dev.fastocron.com/signin"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-cyan-500/35 bg-gradient-to-r from-cyan-500/15 to-indigo-500/15 px-5 py-2 text-sm font-medium text-slate-800 transition hover:scale-[1.02]"
          >
            Sign in
          </a>
        </nav>

        {/* MOBILE NAVBAR */}
        <nav className="flex items-center justify-between border-b border-slate-200/80 bg-white/90 px-4 py-4 shadow-sm backdrop-blur-xl lg:hidden">
          <div className="flex items-center">
          <Link
            href="/"
            className="inline-flex items-center text-lg font-bold tracking-tight bg-gradient-to-r from-cyan-600 to-indigo-600 bg-clip-text text-transparent"
          >
           
              <Image
                src="/icon.png"   
                alt="FastOcron Logo"
                width={60}
                height={60}
                className="object-contain"
              />
         
            <span>FastOcron</span>

            
          </Link>
        </div>

          <button
            onClick={() => setOpen(true)}
            className="rounded-xl border border-slate-200 bg-slate-50 p-2 text-slate-800"
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
                className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
              />

              {/* Sidebar */}
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="fixed right-0 top-0 z-50 flex h-screen w-[82%] max-w-sm flex-col border-l border-slate-200 bg-white p-6 shadow-2xl lg:hidden"
              >
                {/* Top */}
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold bg-gradient-to-r from-cyan-600 to-indigo-600 bg-clip-text text-transparent">
                    FastOcron
                  </span>

                  <button
                    onClick={() => setOpen(false)}
                    className="rounded-xl border border-slate-200 bg-slate-50 p-2 text-slate-800"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                {/* Links */}
                <div className="mt-10 flex-1 space-y-3 overflow-y-auto">
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
                        className="block rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm !font-bold text-slate-700 transition hover:bg-slate-100 hover:text-slate-900"
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* CTA */}
                <div className="mt-6">
                  <a
                    href="https://dev.fastocron.com/signin"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setOpen(false)}
                    className="block w-full rounded-full bg-gradient-to-r from-cyan-400 to-indigo-500 px-5 py-3 text-center text-sm font-semibold text-slate-950"
                  >
                    Sign in
                  </a>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </header>
    </div>
  );
}