'use client'

import Link from 'next/link'
import { useTheme } from 'next-themes'
import { Moon, Sun, Laptop } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div>
              <Link href="/" className="flex items-center py-4 px-2">
                <span className="font-semibold text-gray-500 dark:text-gray-200 text-lg">Expense Tracker</span>
              </Link>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="flex space-x-2 mr-4">
              <button
                onClick={() => setTheme('light')}
                className={`p-2 rounded-full ${theme === 'light' ? 'bg-gray-200 dark:bg-gray-700' : ''}`}
                aria-label="Light mode"
              >
                <Sun className="h-5 w-5 text-gray-800 dark:text-gray-200" />
              </button>
              <button
                onClick={() => setTheme('dark')}
                className={`p-2 rounded-full ${theme === 'dark' ? 'bg-gray-200 dark:bg-gray-700' : ''}`}
                aria-label="Dark mode"
              >
                <Moon className="h-5 w-5 text-gray-800 dark:text-gray-200" />
              </button>
              <button
                onClick={() => setTheme('system')}
                className={`p-2 rounded-full ${theme === 'system' ? 'bg-gray-200 dark:bg-gray-700' : ''}`}
                aria-label="System mode"
              >
                <Laptop className="h-5 w-5 text-gray-800 dark:text-gray-200" />
              </button>
            </div>
            <Link href="/login" className="py-2 px-2 font-medium text-gray-500 dark:text-gray-200 rounded hover:bg-green-500 hover:text-white transition duration-300">Log In</Link>
            <Link href="/signup" className="py-2 px-2 font-medium text-white bg-green-500 rounded hover:bg-green-400 transition duration-300">Sign Up</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

