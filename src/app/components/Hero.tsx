'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import LoadingScreen from './LoadingScreen'

export default function Hero(){
  const { ref, isVisible } = useScrollAnimation()
  const [typedText, setTypedText] = useState('')
  const [roleText, setRoleText] = useState('')
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  const fullText = "Hello! 👋 I Am"
  const roles = [
    "Software Developer",
    "Backend Developer",
    "Full Stack Developer",
    "Web Designer",
    "UI/UX Designer",
    "Frontend Developer",
    "Mobile App Developer"
  ]

  // Loading effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  // Typewriter effect for greeting
  useEffect(() => {
    if (isVisible && !isLoading) {
      let index = 0
      const timer = setInterval(() => {
        setTypedText(fullText.slice(0, index))
        index++
        if (index > fullText.length) {
          clearInterval(timer)
        }
      }, 100)
      return () => clearInterval(timer)
    }
  }, [isVisible])

  // Auto-typing effect for roles
  useEffect(() => {
    if (!isVisible) return

    const currentRole = roles[currentRoleIndex]
    const typingSpeed = isDeleting ? 50 : 100
    const pauseTime = isDeleting ? 500 : 2000

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (roleText.length < currentRole.length) {
          setRoleText(currentRole.slice(0, roleText.length + 1))
        } else {
          // Finished typing, start deleting after pause
          setTimeout(() => setIsDeleting(true), pauseTime)
        }
      } else {
        // Deleting
        if (roleText.length > 0) {
          setRoleText(roleText.slice(0, -1))
        } else {
          // Finished deleting, move to next role
          setIsDeleting(false)
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length)
        }
      }
    }, typingSpeed)

    return () => clearTimeout(timer)
  }, [isVisible, roleText, currentRoleIndex, isDeleting])

  return (
    <>
      <LoadingScreen
        isLoading={isLoading}
        subtitle="Welcome to my portfolio..."
      />

      <section
        ref={ref}
        className={`min-h-screen flex items-center relative overflow-hidden ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          background: 'linear-gradient(135deg, #0c0f1a 0%, #1a1f2e 100%)'
        }}
      >
      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-4 h-4 bg-slate-400 rounded-full animate-pulse"></div>
      <div className="absolute top-32 right-32 dots-pattern"></div>
      <div className="absolute bottom-40 left-20 dots-pattern"></div>
      <div className="absolute top-1/4 right-1/3 star-decoration">✦</div>
      <div className="absolute bottom-1/3 right-20 star-decoration" style={{animationDelay: '1s'}}>✦</div>
      <div className="absolute top-1/2 left-10 star-decoration" style={{animationDelay: '0.5s'}}>✦</div>

      {/* Curved line decorations */}
      <svg className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-10" viewBox="0 0 1920 1080">
        <path
          d="M0,200 Q300,100 600,300 T1200,250 T1920,400"
          stroke="white"
          strokeWidth="2"
          fill="none"
          strokeDasharray="5,5"
        />
        <path
          d="M0,800 Q400,600 800,700 T1600,650 T1920,800"
          stroke="white"
          strokeWidth="1"
          fill="none"
          strokeDasharray="3,3"
        />
      </svg>

      <div className="container grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <div className={`order-2 lg:order-1 ${isVisible ? 'slide-in-left' : ''}`}>
          {/* Software Developer Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-slate-700 rounded-full text-white text-sm font-medium mb-6">
            Software Developer
          </div>

          {/* Main Heading */}
          <h1 className="font-bold leading-tight mb-6">
            <div className="text-white text-xl lg:text-2xl mb-2">{typedText}</div>
            <div className="text-transparent bg-gradient-to-r from-blue-400 to-slate-300 bg-clip-text text-5xl lg:text-7xl">
              Kyle Cervantes
            </div>
          </h1>

          {/* CTA Button */}
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-slate-600 hover:bg-slate-700 text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg mb-8"
          >
            Hire Me
          </Link>

          {/* Description Box */}
          <div className="bg-slate-800/60 backdrop-blur-sm rounded-2xl p-6 border border-slate-600/50">
            <h3 className="text-xl font-semibold text-white mb-3 min-h-[32px] flex items-center">
              <span className="text-blue-400">Freelance </span>
              <span className="text-white">{roleText}</span>
              <span className="animate-pulse text-blue-400 ml-1">|</span>
            </h3>
            <p className="text-gray-300 leading-relaxed ">
             A passionate developer interested about designing modern user experiences, where functionality meets creativity—whether in web apps, mobile apps, or interactive systems.
            </p>
            <div className="mt-4 text-sm text-gray-400 italic">Available for freelance projects</div>
          </div>

          {/* Bottom Dots */}
          <div className="flex space-x-2 mt-6">
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full ${i < 4 ? 'bg-slate-400' : 'bg-gray-600'}`}
              />
            ))}
          </div>
        </div>

        {/* Right Content - Profile Image */}
        <div className={`order-1 lg:order-2 flex justify-center ${isVisible ? 'slide-in-right' : ''}`}>
          <div className="relative">
            {/* Main Profile Container with Transparent Background */}
            <div className="relative w-80 h-96 lg:w-96 lg:h-[480px] flex items-end justify-center">

              {/* Profile Image */}
              <div className="relative z-10 w-64 h-80 lg:w-80 lg:h-96 rounded-t-3xl overflow-hidden">
                <Image
                  src="/img/resume.png" // Replace with your actual image path
                  alt="Kyle Cervantes Profile"
                  width={320}
                  height={384}
                  className="w-full h-full object-cover object-top"
                  priority
                />
              </div>
            </div>

            {/* Floating decorative elements around the profile */}
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-slate-600 rounded-full animate-pulse opacity-70"></div>
            <div className="absolute -bottom-6 -right-6 w-12 h-12 bg-blue-500 rounded-full animate-pulse opacity-50" style={{animationDelay: '1s'}}></div>
            <div className="absolute top-1/3 -left-8 w-6 h-6 bg-slate-500 rounded-full animate-pulse opacity-60" style={{animationDelay: '2s'}}></div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}