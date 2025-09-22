'use client'
import React, { useState, useEffect } from 'react'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import './contact.css'
import { PhoneIcon, EnvelopeIcon, MapPinIcon, ClockIcon, CodeBracketIcon, BriefcaseIcon, HashtagIcon, CameraIcon } from '@heroicons/react/24/outline'
import Footer from '../components/Footer'
import LoadingScreen from '../components/LoadingScreen'

export default function ContactPage(){
  const { ref, isVisible } = useScrollAnimation()
  const [isLoading, setIsLoading] = useState(true)

  // Loading effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2100)
    return () => clearTimeout(timer)
  }, [])

  const contactInfo = [
    {
    icon: <PhoneIcon className="w-8 h-8 text-white" />, // Heroicons Phone icon
    title: 'Phone',
    primary: '+63 969 209 1715',
    secondary: '01-202-555-0125',
    gradient: 'from-green-500 to-emerald-600'
  },
    {
    icon: <EnvelopeIcon className="w-8 h-8 text-white" />, // Heroicons Email icon
    title: 'Email',
    primary: 'cervanteskyle1113@gmail.com',
    secondary: 'yourname@gmail.com',
    gradient: 'from-red-500 to-pink-600'
  },
    {
    icon: <MapPinIcon className="w-8 h-8 text-white" />, // Heroicons Map Pin icon
    title: 'Address',
    primary: 'Lianga, Surigao del Sur',
    secondary: 'Philippines',
    gradient: 'from-blue-500 to-blue-600'
  }
  ]

  return (
    <>
      <LoadingScreen
        isLoading={isLoading}
        subtitle="Let's connect and collaborate..."
      />

      <div className="pt-16 min-h-screen relative overflow-hidden"
           style={{background: 'linear-gradient(135deg, #0c0f1a 0%, #1a1f2e 100%)'}}>

        {/* Decorative 3D Elements */}
        <div className="floating-triangle top-20 left-10" style={{animationDelay: '0s'}}></div>
        <div className="floating-circle-3d top-32 right-20" style={{animationDelay: '2s'}}></div>
        <div className="floating-circle-3d bottom-40 left-20 w-12 h-12" style={{animationDelay: '4s'}}></div>
        <div className="floating-triangle bottom-32 right-16 rotate-180" style={{animationDelay: '1s'}}></div>

        {/* Blue accent dots */}
      <div className="absolute top-24 right-1/3 w-4 h-4 bg-blue-400 rounded-full animate-pulse"></div>
      <div className="absolute bottom-1/3 right-32 w-3 h-3 bg-blue-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-1/4 left-1/4 w-2 h-2 bg-blue-300 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>

      {/* Get In Touch Section with Map */}
      <section
        ref={ref}
        className={`py-20 relative z-10 transition-all duration-700 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left Content */}
            <div className={`${isVisible ? 'slide-in-left' : 'opacity-0'}`}>
              <div className="flex items-center mb-8">
                <div className="w-12 h-1 bg-blue-400 rounded-full mr-4"></div>
                <h1 className="text-4xl lg:text-5xl font-bold text-white">Get In Touch</h1>
              </div>

              <p className="text-gray-300 leading-relaxed mb-8">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor
                do amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>

              {/* Map Placeholder */}
              <div className="relative rounded-2xl overflow-hidden border border-blue-400/30">
                <div className="w-full h-64 bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center relative">
                  {/* Map Background Pattern */}
                  <div className="absolute inset-0 opacity-20">
                    <div className="w-full h-full bg-grid-pattern"></div>
                  </div>

                  {/* Map Content */}
                  <div className="relative z-10 text-center">
                    <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
                      📍
                    </div>
                    <h3 className="text-white font-bold mb-2">Lianga, Surigao del Sur</h3>
                    <p className="text-gray-300 text-sm">Philippines</p>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute top-4 left-4 w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                  <div className="absolute bottom-4 right-4 w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                  <div className="absolute top-1/2 right-8 w-4 h-4 border border-blue-400/50 rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Right Map Placeholder */}
            <div className={`${isVisible ? 'slide-in-right' : 'opacity-0'}`}>
              <div className="bg-slate-800/60 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/30 relative overflow-hidden">
                {/* Interactive Map Placeholder */}
                <div className="w-full h-80 bg-gradient-to-br from-slate-600 to-slate-700 rounded-xl relative overflow-hidden">
                  {/* Simulated Map Interface */}
                  <div className="absolute inset-0 opacity-30">
                    <svg viewBox="0 0 400 300" className="w-full h-full">
                      {/* Grid Lines */}
                      <defs>
                        <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                        </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill="url(#grid)" className="text-blue-400/30"/>

                      {/* Simulated Streets */}
                      <path d="M0,150 Q100,100 200,150 T400,150" stroke="currentColor" strokeWidth="2" fill="none" className="text-blue-400/50"/>
                      <path d="M200,0 L200,300" stroke="currentColor" strokeWidth="1.5" fill="none" className="text-blue-400/40"/>
                      <path d="M100,50 L300,250" stroke="currentColor" strokeWidth="1" fill="none" className="text-blue-400/30"/>
                    </svg>
                  </div>

                  {/* Location Marker */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center animate-pulse">
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                    </div>
                  </div>

                  {/* Map Controls */}
                  <div className="absolute top-4 right-4 space-y-2">
                    <button className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded border border-white/30 flex items-center justify-center text-white hover:bg-white/30 transition-colors">
                      +
                    </button>
                    <button className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded border border-white/30 flex items-center justify-center text-white hover:bg-white/30 transition-colors">
                      -
                    </button>
                  </div>

                  {/* Map Info Card */}
                  <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 text-gray-800 text-sm max-w-xs">
                    <h4 className="font-bold text-red-600">Kyle's Location</h4>
                    <p className="text-xs mt-1">Lianga, Surigao del Sur, Philippines</p>
                    <div className="flex items-center mt-2 text-xs text-gray-600">
                      <span className="text-yellow-500">★★★★★</span>
                      <span className="ml-1">Available for projects</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-20 relative z-10">
        <div className="container">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-8">
              <div className="w-12 h-1 bg-blue-400 rounded-full mr-4"></div>
              <h2 className="text-4xl lg:text-5xl font-bold text-white">Contact Information</h2>
              <div className="w-12 h-1 bg-blue-400 rounded-full ml-4"></div>
            </div>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
              Ready to collaborate? Let's connect and bring your ideas to life with innovative solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <div
                key={info.title}
                className={`bg-slate-800/60 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/30 hover:border-blue-400/50 transition-all duration-300 group hover:scale-105 text-center ${isVisible ? 'slide-in-up' : 'opacity-0'}`}
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-br ${info.gradient} rounded-2xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform`}>
                  {info.icon}
                </div>
                <h3 className="text-white text-xl font-bold mb-4 group-hover:text-blue-400 transition-colors">
                  {info.title}
                </h3>
                <p className="text-blue-400 font-semibold mb-2">{info.primary}</p>
                <p className="text-gray-300 text-sm">{info.secondary}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Services Section */}
      <section className="py-20 relative z-10">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16">

            {/* Left - Quick Actions */}
            <div className={`${isVisible ? 'slide-in-left' : 'opacity-0'}`}>
              <div className="flex items-center mb-8">
                <div className="w-12 h-1 bg-blue-400 rounded-full mr-4"></div>
                <h2 className="text-3xl lg:text-4xl font-bold text-white">Let's Work Together</h2>
              </div>

              <p className="text-gray-300 leading-relaxed mb-8">
                I'm available for freelance projects, full-time opportunities, and consulting work.
                Let's discuss how we can collaborate to create something amazing.
              </p>

              <div className="grid gap-6">
                {/* Email Action */}
                <div className="bg-slate-800/60 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/30 hover:border-blue-400/50 transition-all duration-300 group">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <EnvelopeIcon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white font-bold text-lg group-hover:text-blue-400 transition-colors">Send Email</h3>
                      <p className="text-gray-300 text-sm">cervanteskyle1113@gmail.com</p>
                    </div>
                    <button
                      onClick={() => window.location.href = 'mailto:cervanteskyle1113@gmail.com'}
                      className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-sm font-medium transition-colors"
                    >
                      Email Me
                    </button>
                  </div>
                </div>

                {/* Phone Action */}
                <div className="bg-slate-800/60 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/30 hover:border-blue-400/50 transition-all duration-300 group">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <PhoneIcon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white font-bold text-lg group-hover:text-blue-400 transition-colors">Call Me</h3>
                      <p className="text-gray-300 text-sm">+63 969 209 1715</p>
                    </div>
                    <button
                      onClick={() => window.location.href = 'tel:+639692091715'}
                      className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg text-sm font-medium transition-colors"
                    >
                      Call Now
                    </button>
                  </div>
                </div>

                {/* Location Action */}
                <div className="bg-slate-800/60 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/30 hover:border-blue-400/50 transition-all duration-300 group">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <MapPinIcon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white font-bold text-lg group-hover:text-blue-400 transition-colors">Visit Location</h3>
                      <p className="text-gray-300 text-sm">Lianga, Surigao del Sur, Philippines</p>
                    </div>
                    <button
                      onClick={() => window.open('https://maps.google.com/?q=Lianga,+Surigao+del+Sur,+Philippines', '_blank')}
                      className="px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-lg text-sm font-medium transition-colors"
                    >
                      View Map
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Additional Info */}
            <div className={`${isVisible ? 'slide-in-right' : 'opacity-0'}`}>
              <div className="space-y-8">

                {/* Office Hours */}
                <div className="bg-slate-800/60 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/30">
                  <h3 className="text-white text-xl font-bold mb-6 flex items-center">
                    <ClockIcon className="w-6 h-6 mr-3 text-white" />
                    Office Hours
                  </h3>
                  <div className="space-y-3 text-gray-300">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span className="text-blue-400">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span className="text-blue-400">10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span className="text-gray-500">Closed</span>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="bg-slate-800/60 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/30">
                  <h3 className="text-white text-xl font-bold mb-6 flex items-center">
                    <span className="mr-3">🌐</span>
                    Follow Me
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      {
                        name: 'GitHub',
                        icon: <CodeBracketIcon className="w-6 h-6" />,
                        color: 'from-gray-700 to-gray-900'
                      },
                      {
                        name: 'LinkedIn',
                        icon: <BriefcaseIcon className="w-6 h-6" />,
                        color: 'from-blue-600 to-blue-800'
                      },
                      {
                        name: 'Twitter',
                        icon: <HashtagIcon className="w-6 h-6" />,
                        color: 'from-sky-400 to-blue-600'
                      },
                     {
                        name: 'Instagram',
                        icon: <CameraIcon className="w-6 h-6" />,
                        color: 'from-pink-500 to-purple-600'
                      }
                    ].map((social, index) => (
                      <button
                        key={social.name}
                        className={`p-4 bg-gradient-to-br ${social.color} rounded-xl text-white font-semibold hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2`}
                      >
                        <span>{social.icon}</span>
                        <span className="text-sm">{social.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
    </>
  )
}