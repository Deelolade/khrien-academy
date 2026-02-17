import Link from 'next/link'
import React from 'react'

interface MobileMenuProps {
    setIsMenuOpen: (isOpen: boolean) => void;
}

const MobileMenu = ({ setIsMenuOpen }: MobileMenuProps) => {
    return (
        <div className="md:hidden absolute top-20 left-0 right-0 h-[90vh] justify-between bg-white border-b border-gray-100 shadow-lg px-6 py-8 flex flex-col gap-6 animate-in slide-in-from-top-2 fade-in duration-200 z-50">
            <nav className="flex flex-col gap-8">
                <Link
                    href="/"
                    className="text-xl font-medium text-gray-600 hover:text-black transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                >
                    Home
                </Link>
                <Link
                    href="/about"
                    className="text-xl font-medium text-gray-600 hover:text-black transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                >
                    About Us
                </Link>
                <Link
                    href="/cohorts"
                    className="text-xl font-medium text-gray-600 hover:text-black transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                >
                    Cohorts & Courses
                </Link>
                <Link
                    href="/tuition"
                    className="text-xl font-medium text-gray-600 hover:text-black transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                >
                    Tuition & Dates
                </Link>
            </nav>
            <div className="flex flex-col justify-center items-center gap-4">
                <Link
                    href="/apply"
                    className="text-center border-5 rounded-full border-r border-t border-black bg-brandYellow px-10 py-2 lg:py-3 hover:bg-brandPurple hover:text-white transition-all duration-50 ease-in-out"
                    onClick={() => setIsMenuOpen(false)}
                >
                    Apply Now
                </Link>
            </div>
        </div>
    )
}

export default MobileMenu