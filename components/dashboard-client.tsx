'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import type { Expense, User } from '@prisma/client'
import Link from 'next/link'

interface DashboardClientProps {
  initialExpenses: Expense[]
  user: User
}

export default function DashboardClient({ initialExpenses, user }: DashboardClientProps) {
  const [expenses, setExpenses] = useState(initialExpenses)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-background text-foreground"
    >
      <header className="bg-card shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold">
            Welcome, {user.name}
          </h1>
          <Link 
            href="/logout" 
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-300"
          >
            Logout
          </Link>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="border-4 border-dashed border-border rounded-lg p-4">
              <ul className="divide-y divide-border">
                {expenses.map((expense) => (
                  <li key={expense.id} className="py-4">
                    <div className="flex space-x-3">
                      <div className="flex-1 space-y-1">
                        <div className="flex items-center justify-between">
                          <h3 className="text-sm font-medium">{expense.description}</h3>
                          <p className="text-sm text-muted-foreground">
                            {new Date(expense.date).toLocaleDateString()}
                          </p>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Amount: ${expense.amount.toFixed(2)}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Category: {expense.category}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>
    </motion.div>
  )
}

