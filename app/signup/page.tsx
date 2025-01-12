import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SignupForm from '@/components/SignupForm'

export default function Signup() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-purple-50 to-pink-100 dark:from-gray-800 dark:to-gray-900">
      <Navbar />
      <SignupForm />
      <Footer />
    </div>
  )
}

