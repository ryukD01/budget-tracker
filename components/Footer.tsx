import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-white shadow-lg mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="text-sm text-gray-500">© 2023 Expense Tracker. All rights reserved.</span>
          </div>
          <div className="flex space-x-6">
            <Link href="/about" className="text-sm text-gray-500 hover:text-green-500">About Us</Link>
            <Link href="/contact" className="text-sm text-gray-500 hover:text-green-500">Contact</Link>
            <Link href="/terms" className="text-sm text-gray-500 hover:text-green-500">Terms of Use</Link>
            <Link href="/privacy" className="text-sm text-gray-500 hover:text-green-500">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

