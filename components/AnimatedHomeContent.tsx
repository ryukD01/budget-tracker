'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function AnimatedHomeContent() {
  return (
    <motion.div
      className="text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-6xl font-bold text-gray-800 dark:text-white mb-8">
        Welcome to Expense Tracker
      </h1>
      <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
        Track your expenses with ease and style
      </p>
      <Link 
        href="/login" 
        className="bg-blue-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-600 transition duration-300"
      >
        Get Started
      </Link>
    </motion.div>
  )
}

