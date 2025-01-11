'use client'

import { signOut } from 'next-auth/react'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function Logout() {
  const router = useRouter()

  useEffect(() => {
    const handleLogout = async () => {
      await signOut({ redirect: false })
      router.push('/')
    }
    handleLogout()
  }, [router])

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="text-white text-2xl">Logging out...</div>
    </div>
  )
}

