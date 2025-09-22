'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import Link from 'next/link'
import LoadingScreen from '../components/LoadingScreen'

const portfolioProjects = [
  {
    title: 'E-Commerce Platform',
    category: 'Website',
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    image: '/api/placeholder/400/300',
    description: 'Modern e-commerce platform with advanced features including payment integration, inventory management, and analytics dashboard.',
    liveUrl: 'https://kyle-services.vercel.app/',
    githubUrl: '#'
  },
  {
    title: 'Mobile Bulletin App',
    category: 'Mobile App',
    tech: ['Flutter', 'Firebase', 'SMS Integration'],
    image: '/api/placeholder/400/300',
    description: 'Secure mobile bulletin application with a realtime announcement feature, real-time transactions, and realtime notifications.',
    liveUrl: 'https://drive.google.com/file/d/1INDwBY2Tr7ULAYI1V5kkwcUU1G4xI00W/view?usp=drive_link',
    githubUrl: '#'
  },
  {
    title: 'Barangay Health System',
    category: 'Creative',
    tech: ['PHP', 'MySQL', 'Mapbox'],
    image: '/api/placeholder/400/300',
    description: 'A Barangay Health System that records personal details, tracks 4Ps membership, monitors household illnesses, and integrates a map.',
    liveUrl: 'https://github.com/KSCervantes/barangay_health/tree/master',
    githubUrl: 'https://github.com/KSCervantes/barangay_health/tree/master'
  },
  {
    title: 'Analytics Dashboard',
    category: 'Dashboard',
    tech: ['Vue.js', 'D3.js', 'Chart.js', 'WebSocket'],
    image: '/api/placeholder/400/300',
    description: 'Real-time analytics dashboard with advanced data visualization and customizable widgets.',
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    title: 'Portfolio Website',
    category: 'Website',
    tech: ['Next.js', 'Tailwind', 'TypeScript'],
    image: '/api/placeholder/400/300',
    description: 'Modern portfolio website with interactive animations and responsive design.',
    liveUrl: 'https://kyle-cervantes.netlify.app/',
    githubUrl: '#'
  },
  {
    title: 'Food Delivery App',
    category: 'Mobile App',
    tech: ['Flutter', 'Firebase', 'Google Maps'],
    image: '/api/placeholder/400/300',
    description: 'Cross-platform food delivery app with real-time tracking and payment integration.',
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    title: 'Brand Identity Design',
    category: 'Creative',
    tech: ['Figma', 'Illustrator', 'After Effects'],
    image: '/api/placeholder/400/300',
    description: 'Complete brand identity design including logo, color palette, and design system.',
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    title: 'CRM Dashboard',
    category: 'Dashboard',
    tech: ['React', 'PostgreSQL', 'Chart.js'],
    image: '/api/placeholder/400/300',
    description: 'Customer relationship management dashboard with advanced reporting and analytics.',
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    title: 'Cryptocurrency Tracker',
    category: 'Website',
    tech: ['React', 'CoinGecko API', 'Chart.js'],
    image: '/api/placeholder/400/300',
    description: 'Real-time cryptocurrency tracking website with price alerts and portfolio management.',
    liveUrl: '#',
    githubUrl: '#'
  }
]

const categories = ['All', 'Website', 'Mobile App', 'Dashboard', 'Creative']

export default function PortfolioPage(){
  const { ref, isVisible } = useScrollAnimation()
  const [filter, setFilter] = useState('All')
  const [isLoading, setIsLoading] = useState(true)

  // Loading effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2400)
    return () => clearTimeout(timer)
  }, [])

  // Function to check if URL is a real website (not placeholder)
  const isRealWebsite = (url: string) => {
    return url && url !== '#' && (url.startsWith('http://') || url.startsWith('https://'))
  }

  // Function to generate screenshot URL for real websites with multiple fallbacks
  const getScreenshotUrl = (url: string) => {
    if (!isRealWebsite(url)) return null

    // Try multiple screenshot services as fallbacks
    const services = [
      `https://mini.s-shot.ru/1024x768/JPEG/1024/Z100/?${encodeURIComponent(url)}`,
      `https://image.thum.io/get/allowJPG/width/400/crop/600/noanimate/${encodeURIComponent(url)}`,
      `https://api.urlbox.io/v1/ca482d7e-9417-4569-90fe-80f7c5e1c781/png?url=${encodeURIComponent(url)}&width=400&height=300`
    ]

    // Return the first service for now, we'll handle fallbacks in the component
    return services[0]
  }

  // Enhanced project image component with better fallback handling
  const ProjectImage = ({ project }: { project: { title: string; liveUrl: string; image?: string } }) => {
    const [imageError, setImageError] = useState(false)
    const [screenshotAttempts, setScreenshotAttempts] = useState(0)
    const hasCustomImage = project.image && !project.image.includes('/api/placeholder')

    // Available screenshot services
    const screenshotServices = [
      `https://mini.s-shot.ru/1024x768/JPEG/1024/Z100/?${encodeURIComponent(project.liveUrl)}`,
      `https://image.thum.io/get/allowJPG/width/400/crop/600/noanimate/${encodeURIComponent(project.liveUrl)}`,
      // Fallback to a simple placeholder if all services fail
      null
    ]

    // Get current screenshot URL based on attempts
    const getCurrentScreenshotUrl = () => {
      if (!isRealWebsite(project.liveUrl)) return null
      return screenshotServices[screenshotAttempts] || null
    }

    const currentScreenshotUrl = getCurrentScreenshotUrl()

    // If image failed to load or no more services to try, show fallback
    if (imageError || (screenshotAttempts >= screenshotServices.length - 1 && !hasCustomImage)) {
      return (
        <div className="w-full h-full bg-gradient-to-br from-blue-400/20 to-blue-500/20 flex items-center justify-center">
          <div className="text-center">
            <div className="text-blue-400 text-4xl mb-2">🖥️</div>
            {isRealWebsite(project.liveUrl) && (
              <p className="text-blue-300 text-xs">Live Site Available</p>
            )}
          </div>
        </div>
      )
    }

    const handleImageError = () => {
      if (screenshotAttempts < screenshotServices.length - 1) {
        // Try next screenshot service
        setScreenshotAttempts(prev => prev + 1)
      } else {
        // All services failed, show fallback
        setImageError(true)
      }
    }

    if (hasCustomImage && project.image) {
      // Use custom project image if provided
      return (
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          onError={handleImageError}
        />
      )
    } else if (currentScreenshotUrl) {
      // Use website screenshot for real URLs
      return (
        <Image
          src={currentScreenshotUrl}
          alt={`${project.title} Website Screenshot`}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          onError={handleImageError}
          unoptimized // Bypass Next.js optimization for external screenshot services
        />
      )
    } else {
      // Fallback to computer icon for placeholder links
      return (
        <div className="w-full h-full bg-gradient-to-br from-blue-400/20 to-blue-500/20 flex items-center justify-center">
          <div className="text-blue-400 text-4xl">🖥️</div>
        </div>
      )
    }
  }

  const filteredProjects = filter === 'All'
    ? portfolioProjects
    : portfolioProjects.filter(project => project.category === filter)

  return (
    <>
      <LoadingScreen
        isLoading={isLoading}
        subtitle="Showcasing my best work..."
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
            <h1 className="text-4xl lg:text-5xl font-bold text-white">My Portfolio</h1>
            <div className="w-12 h-1 bg-blue-400 rounded-full ml-4"></div>
          </div>

          <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-12 leading-relaxed">
            Explore my latest projects and creative work. Each project represents a unique challenge
            and showcases my expertise in modern web development, mobile apps, and creative design.
          </p>

          {/* Filter Tabs */}
          <div className="flex justify-center mb-16">
            <div className="flex flex-wrap gap-4 bg-slate-800/60 backdrop-blur-sm p-3 rounded-2xl border border-slate-700/30">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                    filter === category
                      ? 'bg-blue-500 text-white shadow-lg scale-105'
                      : 'text-gray-300 hover:text-white hover:bg-slate-700/50'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="pb-20 relative z-10">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.title}
                className={`group cursor-pointer ${isVisible ? 'slide-in-up' : 'opacity-0'}`}
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="bg-slate-800/60 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700/30 hover:border-blue-400/50 transition-all duration-300 group-hover:scale-105">

                  {/* Project Image */}
                  <div className="relative h-48 bg-gradient-to-br from-slate-700 to-slate-800 overflow-hidden">
                    <ProjectImage project={project} />

                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="text-center">
                        <div className="flex space-x-4">
                          <Link
                            href={project.liveUrl}
                            className={`w-12 h-12 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 ${
                              isRealWebsite(project.liveUrl)
                                ? 'bg-blue-500 hover:bg-blue-600'
                                : 'bg-gray-500 cursor-not-allowed'
                            }`}
                            onClick={(e) => {
                              if (!isRealWebsite(project.liveUrl)) {
                                e.preventDefault()
                              }
                            }}
                          >
                            👁️
                          </Link>
                          <Link
                            href={project.githubUrl}
                            className={`w-12 h-12 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 ${
                              isRealWebsite(project.githubUrl)
                                ? 'bg-slate-700 hover:bg-slate-600'
                                : 'bg-gray-500 cursor-not-allowed'
                            }`}
                            onClick={(e) => {
                              if (!isRealWebsite(project.githubUrl)) {
                                e.preventDefault()
                              }
                            }}
                          >
                            💻
                          </Link>
                        </div>
                        <p className="text-white text-sm mt-3">
                          {isRealWebsite(project.liveUrl) ? 'View Project' : 'Coming Soon'}
                        </p>
                      </div>
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-blue-500/90 text-white text-xs font-semibold rounded-full backdrop-blur-sm">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                      {project.title}
                    </h3>

                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-blue-400/20 text-cyan-300 rounded-full text-xs font-medium transition-all duration-300 hover:bg-blue-400/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View More Button */}
          <div className="text-center mt-16">
            <button className="px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg">
              View More
            </button>
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
                Let&apos;s Work Together
              </h2>
              <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                Have a project in mind? I&apos;d love to hear about it. Let&apos;s discuss how we can
                bring your ideas to life with cutting-edge technology and creative design.
              </p>

              <div className="flex flex-wrap gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  Start a Project
                </Link>

                <Link
                  href="/services"
                  className="px-8 py-4 bg-slate-700 hover:bg-slate-600 text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105 border border-slate-600"
                >
                  View Services
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