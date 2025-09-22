'use client'
import React from 'react'
import Image from 'next/image'

interface LoadingScreenProps {
  isLoading: boolean
  title?: string
  subtitle?: string
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({
  isLoading,
  title = "Kyle Portfolio",
  subtitle = "Loading amazing content..."
}) => {
  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
      <div className="text-center">
        {/* Project Logo */}
        <div className="relative mb-8">
          <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto rounded-2xl overflow-hidden bg-white/10 backdrop-blur-sm p-2 animate-bounce">
            <Image
              src="/img/LOGO.png"
              alt="Kyle Portfolio Logo"
              width={96}
              height={96}
              className="w-full h-full object-contain"
              priority
            />
          </div>
          <div className="absolute -top-2 -right-2 w-4 h-4 sm:w-6 sm:h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-ping"></div>
          <div className="absolute -bottom-2 -left-2 w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full animate-pulse"></div>
        </div>

        {/* Loading Text */}
        <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">{title}</h2>
        <p className="text-gray-300 mb-8 text-sm sm:text-base">{subtitle}</p>

        {/* Loading Bar */}
        <div className="w-48 sm:w-64 h-2 bg-slate-700 rounded-full mx-auto overflow-hidden">
          <div className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full animate-pulse w-full loading-pulse"></div>
        </div>

        {/* Loading Percentage */}
        <div className="mt-4 text-blue-400 font-semibold text-sm">
          <span className="animate-pulse">Loading...</span>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;