import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import LoginForm from '@/components/LoginForm'

export default function Login() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-green-50 to-emerald-100 dark:from-gray-800 dark:to-gray-900">
      <Navbar />
      <LoginForm />
      <Footer />
    </div>
  )
}

