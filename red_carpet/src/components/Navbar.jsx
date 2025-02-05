"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Home, Plus, MoreVertical, Search } from "lucide-react"
import { useTheme } from "next-themes"
import Link from "next/link"

const menuItems = [
  { title: "LOGIN", href: "/login" },
  { title: "VOTE", href: "/vote" },
  { title: "PROFILE", href: "/profile" },
  { title: "RESULT", href: "/result" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <div className="relative   w-full bg-black text-white">
   {/* Top Navigation */}
      <header className="relative z-20 flex items-center justify-between px-4 py-3">
      <h1 className="text-3xl">logo</h1>
        <div className="flex items-center gap-4">
          <button onClick={() => setIsOpen(true)} className="rounded-full z-50  bg-orange-500 px-6 py-2 font-medium">
            MENU
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 1, height: 0, width: 0 }}
            animate={{ height: "auto", width: "300px" }}
            exit={{ height: 0, width: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed  top-2 right-2 z-30 origin-top-right overflow-hidden rounded-xl bg-neutral-900"
            style={{ transformOrigin: "top right" }}
          >
            <div className="flex h-full flex-col p-6">
              <div className="flex justify-end">
                <button onClick={() => setIsOpen(false)} className="rounded-full font-bold  bg-orange-500 px-6 py-2 absolute top-1 right-2 ">
                  CLOSE
                </button>
              </div>
              <nav className="mt-8 flex flex-col gap-4">
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 20, opacity: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      className="text-2xl font-bold text-white hover:text-orange-500"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.title}
                    </Link>
                  </motion.div>
                ))}
              </nav>
              
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

