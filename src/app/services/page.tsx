'use client'
import React, { useState, useEffect } from 'react'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import Link from 'next/link'
import LoadingScreen from '../components/LoadingScreen'
import {
  GlobeAltIcon,
  PaintBrushIcon,
  DevicePhoneMobileIcon,
  ShoppingCartIcon,
  BoltIcon,
  AcademicCapIcon
} from '@heroicons/react/24/outline'

const services = [
  {
    title: 'Web Development',
    desc: 'Full-stack development with modern technologies',
    icon: <GlobeAltIcon className="w-12 h-12" />,
    features: ['Responsive Design', 'Performance Optimization', 'SEO Friendly', 'Progressive Web Apps'],
    technologies: ['React', 'Next.js', 'Node.js', 'TypeScript'],
    price: 'Starting at $2,500',
    color: 'from-blue-400 to-blue-500'
  },
  {
    title: 'UI/UX Design',
    desc: 'Beautiful and intuitive user experiences',
    icon: <PaintBrushIcon className="w-12 h-12" />,
    features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
    technologies: ['Figma', 'Adobe XD', 'Sketch', 'Principle'],
    price: 'Starting at $1,800',
    color: 'from-purple-500 to-pink-500'
  },
  {
    title: 'Mobile Development',
    desc: 'Cross-platform mobile applications',
    icon: <DevicePhoneMobileIcon className="w-12 h-12" />,
    features: ['iOS & Android', 'Flutter', 'App Store Deploy', 'Push Notifications'],
    technologies: ['Flutter', 'React Native', 'Swift', 'Kotlin'],
    price: 'Starting at $3,500',
    color: 'from-green-500 to-emerald-500'
  },
  {
    title: 'E-commerce Solutions',
    desc: 'Complete online store development',
    icon: <ShoppingCartIcon className="w-12 h-12" />,
    features: ['Payment Integration', 'Inventory Management', 'Admin Dashboard', 'Analytics'],
    technologies: ['Shopify', 'WooCommerce', 'Stripe', 'PayPal'],
    price: 'Starting at $4,000',
    color: 'from-orange-500 to-red-500'
  },
  {
    title: 'Performance Optimization',
    desc: 'Speed up your existing applications',
    icon: <BoltIcon className="w-12 h-12" />,
    features: ['Code Splitting', 'Bundle Analysis', 'Core Web Vitals', 'Database Optimization'],
    technologies: ['Lighthouse', 'Webpack', 'Vite', 'CDN'],
    price: 'Starting at $1,200',
    color: 'from-yellow-500 to-orange-500'
  },
  {
    title: 'Consulting & Training',
    desc: 'Technical consultation and team training',
    icon: <AcademicCapIcon className="w-12 h-12" />,
    features: ['Code Review', 'Architecture Planning', 'Team Training', 'Best Practices'],
    technologies: ['Custom', 'Workshops', 'Documentation', 'Mentoring'],
    price: 'Starting at $150/hour',
    color: 'from-indigo-500 to-purple-500'
  },
]

export default function ServicesPage(){
  const { ref, isVisible } = useScrollAnimation()
  const [selectedService, setSelectedService] = useState<number | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  // Loading effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2300)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <LoadingScreen
        isLoading={isLoading}
        subtitle="Discovering my services..."
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

      {/* Hero Section */}
      <section
        ref={ref}
        className={`py-20 relative z-10 transition-all duration-700 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="container text-center">
          {/* Section Header with Blue Line */}
          <div className="flex items-center justify-center mb-8">
            <div className="w-12 h-1 bg-blue-400 rounded-full mr-4"></div>
            <h1 className="text-4xl lg:text-5xl font-bold text-white">My Services</h1>
            <div className="w-12 h-1 bg-blue-400 rounded-full ml-4"></div>
          </div>

          <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-16 leading-relaxed">
            I provide comprehensive digital solutions to help your business thrive in the modern world.
            From concept to deployment, I deliver high-quality services tailored to your specific needs.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-20 relative z-10">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`group cursor-pointer ${isVisible ? 'slide-in-up' : 'opacity-0'}`}
                style={{animationDelay: `${index * 0.1}s`}}
                onClick={() => setSelectedService(selectedService === index ? null : index)}
              >
                <div className={`bg-slate-800/60 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/30 hover:border-blue-400/50 transition-all duration-300 relative overflow-hidden h-full ${
                  selectedService === index ? 'scale-105 border-blue-400/70' : ''
                }`}>

                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>

                  {/* Service Icon with Background */}
                  <div className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-all duration-300 group-hover:rotate-3`}>
                    {service.icon}
                  </div>

                  {/* Service Title */}
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Service Description */}
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.desc}
                  </p>

                  {/* Price */}
                  <div className="mb-6">
                    <span className="text-blue-400 font-bold text-lg">{service.price}</span>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wide">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="px-3 py-1 bg-blue-400/20 text-blue-300 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Expandable features */}
                  <div className={`overflow-hidden transition-all duration-300 ${
                    selectedService === index ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="border-t border-gray-700 pt-6">
                      <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wide">Features Included</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="text-sm text-gray-300 flex items-center">
                            <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Click indicator */}
                  <div className="absolute top-6 right-6 text-gray-500 group-hover:text-blue-400 transition-colors duration-300">
                    <span className={`transform transition-transform duration-300 ${selectedService === index ? 'rotate-180' : ''}`}>
                      ▼
                    </span>
                  </div>

                  {/* Hover glow effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400/0 via-blue-400/5 to-blue-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative z-10">
        <div className="container">
          <div className="bg-slate-800/60 backdrop-blur-sm rounded-3xl p-12 border border-slate-700/30 text-center relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/5 via-blue-500/5 to-purple-500/5"></div>

            <div className="relative z-10">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Ready to Start Your Project?
              </h2>
              <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                Let&apos;s discuss your ideas and bring them to life. I&apos;m here to help you create
                something amazing that stands out in the digital world.
              </p>

              <div className="flex flex-wrap gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  Get Started
                </Link>

                <Link
                  href="/portfolio"
                  className="px-8 py-4 bg-slate-700 hover:bg-slate-600 text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105 border border-slate-600"
                >
                  View Portfolio
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 relative z-10 border-t border-slate-700/30">
        <div className="container text-center">
          <p className="text-gray-400 text-sm">
            Copyright © 2025 Portfolio. All Rights Reserved
          </p>
        </div>
      </footer>
    </div>
    </>
  )
}