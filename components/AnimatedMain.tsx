'use client'

import { motion } from "framer-motion"

const AnimatedMain = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.main 
      className="flex-grow flex flex-col items-center justify-center py-2 bg-gradient-to-r from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.main>
  )
}

export default AnimatedMain

