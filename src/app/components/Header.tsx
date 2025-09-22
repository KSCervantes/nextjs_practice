'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const links = [
  {path:'/', label:'Home'},
  {path:'/about', label:'About'},
  {path:'/services', label:'Services'},
  {path:'/portfolio', label:'Portfolio'},
  {path:'/resume', label:'Resume'},
  {path:'/skills', label:'Skills'},
  {path:'/contact', label:'Contact'},
]

export default function Header(){
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <header className="fixed w-full top-0 z-50 backdrop-blur-md bg-gradient-to-r from-slate-900/95 via-slate-800/95 to-slate-900/95 lg:backdrop-blur-sm lg:bg-black/40 border-b border-slate-700/50 lg:border-slate-700/30 shadow-lg lg:shadow-none">
      <div className="container flex items-center justify-between h-14 sm:h-16 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center z-50" onClick={closeMobileMenu}>
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg overflow-hidden bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-sm p-1 border border-white/20 lg:border-white/10">
            <Image
              src="/img/LOGO.png"
              alt="Kyle Logo"
              width={40}
              height={40}
              className="w-full h-full object-contain"
              priority
            />
          </div>
          <span className="ml-2 text-white font-bold text-sm sm:text-base drop-shadow-md">Kyle</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:block">
          <ul className="flex gap-6 xl:gap-8 items-center text-gray-300">
            {links.map(link => (
              <li key={link.path}>
                <Link
                  href={link.path}
                  className={`hover:text-white transition-colors duration-200 text-sm xl:text-base font-medium ${
                    pathname === link.path
                      ? 'text-white border-b-2 border-blue-400 pb-1'
                      : 'hover:text-blue-400'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="lg:hidden z-50 p-2 rounded-lg bg-gradient-to-r from-slate-800/80 to-slate-700/80 backdrop-blur-sm border border-slate-600/50 text-white hover:text-blue-400 hover:border-blue-400/50 transition-all duration-200 shadow-md"
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? (
            <XMarkIcon className="w-5 h-5 sm:w-6 sm:h-6" />
          ) : (
            <Bars3Icon className="w-5 h-5 sm:w-6 sm:h-6" />
          )}
        </button>

        {/* Mobile Navigation Overlay */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-md lg:hidden" onClick={closeMobileMenu}>
            <div
              className="absolute top-0 right-0 w-64 sm:w-72 h-full bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 backdrop-blur-xl border-l border-slate-600/50 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Mobile Menu Header */}
              <div className="flex items-center justify-between p-4 sm:p-6 border-b border-slate-600/50 bg-gradient-to-r from-slate-800 to-slate-700">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-lg overflow-hidden bg-gradient-to-br from-white/30 to-white/20 backdrop-blur-sm p-1 border border-white/30">
                    <Image
                      src="/img/LOGO.png"
                      alt="Kyle Logo"
                      width={32}
                      height={32}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="ml-2 text-white font-bold drop-shadow-md">Kyle Portfolio</span>
                </div>
              </div>

              {/* Mobile Menu Links */}
              <nav className="p-4 sm:p-6">
                <ul className="space-y-4">
                  {links.map(link => (
                    <li key={link.path}>
                      <Link
                        href={link.path}
                        onClick={closeMobileMenu}
                        className={`block py-3 px-4 rounded-lg transition-all duration-200 font-medium ${
                          pathname === link.path
                            ? 'bg-blue-500/20 text-blue-400 border border-blue-400/30'
                            : 'text-gray-300 hover:text-white hover:bg-slate-800/50'
                        }`}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>

                {/* Mobile Menu Footer */}
                <div className="mt-8 pt-6 border-t border-slate-700/30">
                  <p className="text-gray-400 text-sm text-center">
                    © 2025 Kyle Portfolio
                  </p>
                </div>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}