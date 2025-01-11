import Link from 'next/link'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import { redirect } from 'next/navigation'
import AnimatedLayout from '@/components/AnimatedLayout'

export default async function Home() {
  const session = await getServerSession(authOptions)

  if (session) {
    redirect('/dashboard')
  }

  return (
    <AnimatedLayout>
      <div className="flex-grow flex flex-col items-center justify-center py-2 bg-gradient-to-r from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900">
        <div className="text-center">
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
        </div>
      </div>
    </AnimatedLayout>
  )
}

