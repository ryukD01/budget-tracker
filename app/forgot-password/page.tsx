import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ForgotPasswordForm from '@/components/ForgotPasswordForm'

export default function ForgotPassword() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-yellow-50 to-amber-100 dark:from-gray-800 dark:to-gray-900">
      <Navbar />
      <ForgotPasswordForm />
      <Footer />
    </div>
  )
}

