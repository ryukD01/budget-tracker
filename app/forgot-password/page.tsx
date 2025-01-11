'use client'

import { useState } from 'react'
import Link from 'next/link'
import AnimatedLayout from '@/components/AnimatedLayout'

export default function ForgotPassword() {
  const [isLoading, setIsLoading] = useState(false)
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      setIsLoading(true)
      // Here you would typically call your API to handle password reset
      // For now, we'll just simulate a delay and show a message
      await new Promise(resolve => setTimeout(resolve, 1000))
      setMessage('If an account exists for this email, a password reset link has been sent.')
    } catch (error) {
      console.error('Password reset error:', error)
      setMessage('An error occurred. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <AnimatedLayout>
      <div className="flex-grow flex items-center justify-center bg-gradient-to-r from-yellow-50 to-orange-100 dark:from-gray-800 dark:to-gray-900">
        <div className="p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg w-96">
          <h1 className="text-3xl font-bold mb-6 text-center text-gray-800 dark:text-white">Forgot Password</h1>
          {message ? (
            <div className="mb-4 p-4 text-sm text-green-700 bg-green-100 dark:text-green-400 dark:bg-green-900 rounded-lg">
              {message}
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:text-white"
                />
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300 disabled:opacity-50"
              >
                {isLoading ? 'Sending...' : 'Reset Password'}
              </button>
            </form>
          )}
          <div className="mt-4 text-center">
            <Link href="/login" className="text-sm text-blue-500 hover:underline">
              Back to Login
            </Link>
          </div>
        </div>
      </div>
    </AnimatedLayout>
  )
}

