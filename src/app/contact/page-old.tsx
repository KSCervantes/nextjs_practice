'use client'
import React, { useState } from 'react'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import { PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline'

export default function ContactPage(){
  const { ref, isVisible } = useScrollAnimation()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitted(true)
      setFormData({ name: '', email: '', message: '' })

      // Reset success message after 3 seconds
      setTimeout(() => setSubmitted(false), 3000)
    }, 2000)
  }

  const contactMethods = [
    {
    icon: <EnvelopeIcon className="w-8 h-8 text-white" />, // Heroicons Email icon
    title: 'Email',
    primary: 'kscervantes@nemsu.edu.ph',
    secondary: 'yourname@gmail.com',
    gradient: 'from-red-500 to-pink-600'
  },
    {
    icon: <PhoneIcon className="w-8 h-8 text-white" />, // Heroicons Phone icon
    title: 'Phone',
    primary: '+63 969 209 1715',
    secondary: '01-202-555-0125',
    gradient: 'from-green-500 to-emerald-600'
  },
    {
      icon: '💼',
      label: 'LinkedIn',
      value: 'linkedin.com/in/kyle',
      href: 'https://linkedin.com/in/kyle'
    },
    {
      icon: '🐙',
      label: 'GitHub',
      value: 'github.com/kyle',
      href: 'https://github.com/kyle'
    }
  ]

  return (
    <div className="pt-16"> {/* Account for fixed header */}
      <section
        ref={ref}
        className={`section transition-all duration-700 ${
          isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
        }`}
      >
        <div className="container">
          <h1 className={`text-4xl font-bold mb-6 text-center bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent ${isVisible ? 'bounce-in' : ''}`}>
            Get In Touch
          </h1>
          <p className={`text-center text-gray-300 mb-12 max-w-2xl mx-auto ${isVisible ? 'slide-in-left' : ''}`}>
            Have a project in mind? Let&apos;s discuss how we can work together to bring your ideas to life.
          </p>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className={`${isVisible ? 'slide-in-left' : ''}`}>
              <div className="card interactive-card relative">
                {submitted && (
                  <div className="absolute inset-0 bg-green-500/10 border border-green-500/30 rounded-2xl flex items-center justify-center z-10">
                    <div className="text-center">
                      <div className="text-4xl mb-2">✅</div>
                      <p className="text-green-400 font-medium">Message sent successfully!</p>
                    </div>
                  </div>
                )}

                <h3 className="text-xl font-semibold mb-6">Send a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="group">
                    <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full p-3 rounded-lg border border-gray-700 bg-transparent text-white placeholder-gray-400 focus:border-accent focus:ring-1 focus:ring-accent transition-all duration-300 group-hover:border-gray-600"
                      placeholder="Your name"
                    />
                  </div>

                  <div className="group">
                    <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full p-3 rounded-lg border border-gray-700 bg-transparent text-white placeholder-gray-400 focus:border-accent focus:ring-1 focus:ring-accent transition-all duration-300 group-hover:border-gray-600"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div className="group">
                    <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full p-3 rounded-lg border border-gray-700 bg-transparent text-white placeholder-gray-400 focus:border-accent focus:ring-1 focus:ring-accent transition-all duration-300 resize-none group-hover:border-gray-600"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      isSubmitting
                        ? 'bg-gray-600 cursor-not-allowed'
                        : 'bg-accent hover:bg-accent/80 hover:scale-105'
                    } text-white relative overflow-hidden`}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className={`${isVisible ? 'slide-in-right' : ''}`}>
              <div className="space-y-6">
                <div className="card interactive-card">
                  <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
                  <div className="space-y-4">
                    {contactMethods.map((method) => (
                      <a
                        key={method.label}
                        href={method.href}
                        className="flex items-center space-x-4 p-3 rounded-lg hover:bg-white/5 transition-all duration-300 group"
                      >
                        <div className="text-2xl group-hover:scale-110 transition-transform duration-300">
                          {method.icon}
                        </div>
                        <div>
                          <p className="text-sm text-gray-400">{method.label}</p>
                          <p className="text-white group-hover:text-accent transition-colors duration-300">
                            {method.value}
                          </p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Availability Status */}
                <div className="card interactive-card">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full pulse-effect"></div>
                    <div>
                      <p className="font-medium">Available for work</p>
                      <p className="text-sm text-gray-400">Currently accepting new projects</p>
                    </div>
                  </div>
                </div>

                {/* Response Time */}
                <div className="card interactive-card">
                  <div className="flex items-center space-x-3">
                    <div className="text-2xl">⚡</div>
                    <div>
                      <p className="font-medium">Quick Response</p>
                      <p className="text-sm text-gray-400">Usually responds within 24 hours</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}