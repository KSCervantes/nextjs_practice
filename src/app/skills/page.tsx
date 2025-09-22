'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import Link from 'next/link'
import LoadingScreen from '../components/LoadingScreen'
import {
  ComputerDesktopIcon,
  PaintBrushIcon,
  TagIcon,
  BoltIcon,
  SwatchIcon,
  PhotoIcon,
  CodeBracketIcon,
  ServerIcon,
  PencilSquareIcon,
  FilmIcon,
  UsersIcon,
  GiftIcon,
  TrophyIcon,
  RocketLaunchIcon
} from '@heroicons/react/24/outline'

const whatIDoServices = [
  {
    title: 'Website Design',
    description: 'Creating modern, responsive, and user-friendly websites that deliver exceptional user experiences across all devices and platforms.',
    icon: <ComputerDesktopIcon className="w-6 h-6 sm:w-8 sm:h-8" />,
    gradient: 'from-blue-400 to-blue-500'
  },
  {
    title: 'Graphic Design',
    description: 'Designing visually stunning graphics, branding materials, and digital assets that capture your brand essence and communicate effectively.',
    icon: <PaintBrushIcon className="w-6 h-6 sm:w-8 sm:h-8" />,
    gradient: 'from-green-400 to-blue-500'
  },
  {
    title: 'Mobile App Design',
    description: 'Crafting intuitive and engaging mobile application interfaces that provide seamless user experiences on iOS and Android platforms.',
    icon: <TagIcon className="w-6 h-6 sm:w-8 sm:h-8" />,
    gradient: 'from-blue-400 to-teal-500'
  },
  {
    title: 'Web Development',
    description: 'Building robust, scalable web applications with modern technologies, best practices, and optimized performance for all devices.',
    icon: <BoltIcon className="w-6 h-6 sm:w-8 sm:h-8" />,
    gradient: 'from-yellow-400 to-orange-500'
  }
]

const mySkills = [
  { name: 'Figma', level: 50, icon: <SwatchIcon className="w-5 h-5 sm:w-6 sm:h-6" />, color: 'from-purple-500 to-pink-500' },
  { name: 'Photoshop', level: 55, icon: <PhotoIcon className="w-5 h-5 sm:w-6 sm:h-6" />, color: 'from-blue-600 to-blue-800' },
  { name: 'Frontend', level: 70, icon: <CodeBracketIcon className="w-5 h-5 sm:w-6 sm:h-6" />, color: 'from-orange-500 to-yellow-600' },
  { name: 'Backend', level: 80, icon: <ServerIcon className="w-5 h-5 sm:w-6 sm:h-6" />, color: 'from-purple-600 to-indigo-700' },
  { name: 'Full Stack', level: 80, icon: <PencilSquareIcon className="w-5 h-5 sm:w-6 sm:h-6" />, color: 'from-green-500 to-teal-600' },
  { name: 'Mobile Development', level: 60, icon: <FilmIcon className="w-5 h-5 sm:w-6 sm:h-6" />, color: 'from-purple-700 to-blue-800' }
]

const latestProjects = [
  {
    title: 'Payroll Mobile Application',
    category: 'Ongoing Development',
    timeAgo: '1 Month Ago',
    image: '/api/placeholder/300/200',
    tech: 'React Native, Firebase'
  },
  {
    title: 'Document Tracker Mobile Application',
    category: 'Ongoing Development',
    timeAgo: '1 Month Ago',
    image: '/api/placeholder/300/200',
    tech: 'Flutter, Node.js'
  },
  {
    title: 'Queue Mobile Application',
    category: 'Ongoing Development',
    timeAgo: '1 Month Ago',
    image: '/api/placeholder/300/200',
    tech: 'React Native, Express'
  }
]

const statistics = [
  { number: '100+', label: 'Happy Clients', icon: <UsersIcon className="w-8 h-8 sm:w-10 sm:h-10" /> },
  { number: '15', label: 'Projects Done', icon: <GiftIcon className="w-8 h-8 sm:w-10 sm:h-10" /> },
  { number: '2', label: 'Awards Won', icon: <TrophyIcon className="w-8 h-8 sm:w-10 sm:h-10" /> }
]

export default function SkillsPage(){
  const { ref, isVisible } = useScrollAnimation()
  const [animatedSkills, setAnimatedSkills] = useState<{[key: string]: number}>({})
  const [isLoading, setIsLoading] = useState(true)

  // Loading effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2500)
    return () => clearTimeout(timer)
  }, [])

  // Skills animation effect
  useEffect(() => {
    if (isVisible && !isLoading) {
      const timer = setTimeout(() => {
        const animated: {[key: string]: number} = {}
        mySkills.forEach(skill => {
          animated[skill.name] = skill.level
        })
        setAnimatedSkills(animated)
      }, 500)

      return () => clearTimeout(timer)
    }
  }, [isVisible, isLoading])

  return (
    <>
      <LoadingScreen
        isLoading={isLoading}
        subtitle="Loading skills and expertise..."
      />

      <div className="pt-16 min-h-screen relative overflow-hidden"
           style={{background: 'linear-gradient(135deg, #0c0f1a 0%, #1a1f2e 100%)'}}>

        {/* Enhanced Decorative 3D Elements - Responsive */}
        <div className="floating-triangle top-10 sm:top-20 left-4 sm:left-10" style={{animationDelay: '0s'}}></div>
        <div className="floating-circle-3d top-16 sm:top-32 right-8 sm:right-20" style={{animationDelay: '2s'}}></div>
        <div className="floating-circle-3d bottom-20 sm:bottom-40 left-8 sm:left-20 w-8 h-8 sm:w-12 sm:h-12" style={{animationDelay: '4s'}}></div>
        <div className="floating-triangle bottom-16 sm:bottom-32 right-8 sm:right-16 rotate-180" style={{animationDelay: '1s'}}></div>

        {/* Enhanced Blue accent dots - Responsive */}
        <div className="absolute top-12 sm:top-24 right-1/4 sm:right-1/3 w-3 h-3 sm:w-4 sm:h-4 bg-blue-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/3 right-16 sm:right-32 w-2 h-2 sm:w-3 sm:h-3 bg-blue-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/4 left-1/4 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-300 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/4 sm:left-1/3 w-12 h-12 sm:w-16 sm:h-16 border border-blue-400/20 rounded-full"></div>
        <div className="absolute bottom-1/2 right-1/6 sm:right-1/4 w-16 h-16 sm:w-24 sm:h-24 border border-blue-400/10 rounded-full"></div>

        {/* Hero Section - Enhanced Responsive */}
        <section
          ref={ref}
          className={`py-12 sm:py-16 md:py-20 relative z-10 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="container px-4 sm:px-6 lg:px-8 text-center">
            {/* Section Header with Blue Line - Responsive */}
            <div className="flex items-center justify-center mb-6 sm:mb-8">
              <div className="w-8 sm:w-12 h-1 bg-blue-400 rounded-full mr-3 sm:mr-4"></div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white px-2">
                Skills & Expertise
              </h1>
              <div className="w-8 sm:w-12 h-1 bg-blue-400 rounded-full ml-3 sm:ml-4"></div>
            </div>

            <p className="text-gray-300 text-base sm:text-lg max-w-3xl mx-auto mb-12 sm:mb-16 leading-relaxed px-4">
              Explore my comprehensive skill set in design and development. From creative design tools
              to modern web technologies, I bring ideas to life with precision and innovation.
            </p>
          </div>
        </section>

        {/* What I Do Section - Enhanced Responsive */}
        <section className="py-12 sm:py-16 md:py-20 relative z-10">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">

              {/* Left Content - Enhanced Responsive */}
              <div className={`${isVisible ? 'slide-in-left' : 'opacity-0'}`}>
                <div className="flex items-center mb-6 sm:mb-8">
                  <div className="w-8 sm:w-12 h-1 bg-blue-400 rounded-full mr-3 sm:mr-4"></div>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">What I Do</h2>
                </div>

                <p className="text-gray-300 leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base">
                  Specializing in modern web development and creative design solutions.
                  I combine technical expertise with artistic vision to deliver exceptional
                  digital experiences that engage users and drive results.
                </p>

                {/* Profile Image - Enhanced Responsive */}
                <div className="relative">
                  <div className="w-full max-w-sm sm:max-w-md h-64 sm:h-80 rounded-2xl overflow-hidden mx-auto lg:mx-0">
                    <Image
                      src="/img/Profile3-bg.png"
                      alt="Kyle Cervantes Profile"
                      width={400}
                      height={320}
                      className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
                      priority
                    />
                  </div>
                  {/* Floating badge */}
                  <div className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-2 rounded-full text-xs font-bold shadow-lg animate-bounce">
                    Available for hire
                  </div>
                </div>
              </div>

              {/* Right Services Grid - Enhanced Responsive */}
              <div className={`grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 ${isVisible ? 'slide-in-right' : 'opacity-0'}`}>
                {whatIDoServices.map((service, index) => (
                  <div
                    key={service.title}
                    className="bg-slate-800/60 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-slate-700/30 hover:border-blue-400/50 transition-all duration-300 group hover:scale-105 hover:rotate-1"
                    style={{animationDelay: `${index * 0.1}s`}}
                  >
                    <div className="text-center">
                      <div className={`w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-all duration-300 group-hover:rotate-3 shadow-lg`}>
                        {service.icon}
                      </div>
                      <h3 className="text-white text-base sm:text-lg font-bold mb-2 sm:mb-3 group-hover:text-blue-400 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Skills Progress Section - Enhanced */}
        <section className="py-12 sm:py-16 md:py-20 relative z-10">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-12">
              <div className="flex items-center justify-center mb-6 sm:mb-8">
                <div className="w-8 sm:w-12 h-1 bg-blue-400 rounded-full mr-3 sm:mr-4"></div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">My Skills</h2>
                <div className="w-8 sm:w-12 h-1 bg-blue-400 rounded-full ml-3 sm:ml-4"></div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {mySkills.map((skill, index) => (
                <div
                  key={skill.name}
                  className={`bg-slate-800/60 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/30 hover:border-blue-400/50 transition-all duration-300 group hover:scale-105 ${isVisible ? 'slide-in-up' : 'opacity-0'}`}
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <div className="flex items-center mb-4">
                    <div className={`w-10 h-10 bg-gradient-to-br ${skill.color} rounded-xl flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform duration-300`}>
                      {skill.icon}
                    </div>
                    <div>
                      <h3 className="text-white font-semibold group-hover:text-blue-400 transition-colors">
                        {skill.name}
                      </h3>
                      <span className="text-blue-400 font-bold text-lg">
                        {animatedSkills[skill.name] || 0}%
                      </span>
                    </div>
                  </div>

                  <div className="w-full bg-slate-700 rounded-full h-3 overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                      style={{ width: `${animatedSkills[skill.name] || 0}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Latest Projects Section - Enhanced Responsive */}
        <section className="py-12 sm:py-16 md:py-20 relative z-10">
          <div className="container px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex items-center justify-center mb-6 sm:mb-8">
              <div className="w-8 sm:w-12 h-1 bg-blue-400 rounded-full mr-3 sm:mr-4"></div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">Latest Projects</h2>
              <div className="w-8 sm:w-12 h-1 bg-blue-400 rounded-full ml-3 sm:ml-4"></div>
            </div>

            <p className="text-gray-300 leading-relaxed mb-8 sm:mb-12 max-w-2xl mx-auto text-sm sm:text-base px-4">
              Showcasing my latest work in mobile application development. Each project represents
              innovative solutions built with modern technologies and user-centered design principles.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
              {latestProjects.map((project, index) => (
                <div
                  key={index}
                  className={`bg-slate-800/60 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700/30 hover:border-blue-400/50 transition-all duration-300 group hover:scale-105 hover:rotate-1 ${isVisible ? 'slide-in-up' : 'opacity-0'}`}
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <div className="h-40 sm:h-48 bg-gradient-to-br from-blue-400/20 to-blue-500/20 flex items-center justify-center relative overflow-hidden">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-all duration-300 group-hover:rotate-3 shadow-lg">
                      <RocketLaunchIcon className="w-6 h-6 sm:w-8 sm:h-8" />
                    </div>
                    {/* Enhanced floating particles */}
                    <div className="absolute top-4 left-4 w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
                    <div className="absolute bottom-4 right-4 w-1.5 h-1.5 bg-purple-400 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
                    <div className="absolute top-1/2 left-6 w-1 h-1 bg-yellow-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                    <div className="absolute bottom-6 left-1/2 w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>
                  </div>
                  <div className="p-4 sm:p-6">
                    <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
                      <span className="px-2 sm:px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs font-semibold">
                        {project.category}
                      </span>
                      <span className="text-gray-400 text-xs">⏰ {project.timeAgo}</span>
                    </div>
                    <h3 className="text-white font-semibold group-hover:text-blue-400 transition-colors text-sm sm:text-base mb-2">
                      {project.title}
                    </h3>
                    <div className="flex flex-wrap gap-1 sm:gap-2">
                      {project.tech.split(', ').map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-slate-700/50 text-gray-300 rounded text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button className="px-6 sm:px-8 py-3 sm:py-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg text-sm sm:text-base">
              View More Projects
            </button>
          </div>
        </section>

        {/* Statistics Section - Enhanced Responsive */}
        <section className="py-12 sm:py-16 md:py-20 relative z-10">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
              {statistics.map((stat, index) => (
                <div
                  key={index}
                  className={`text-center bg-slate-800/60 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-slate-700/30 hover:border-blue-400/50 transition-all duration-300 group hover:scale-105 hover:rotate-1 ${isVisible ? 'bounce-in' : 'opacity-0'}`}
                  style={{animationDelay: `${index * 0.2}s`}}
                >
                  <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-3 sm:mb-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-all duration-300 group-hover:rotate-3 shadow-lg">
                    {stat.icon}
                  </div>
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 font-medium text-sm sm:text-base">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section - Enhanced Responsive */}
        <section className="py-12 sm:py-16 md:py-20 relative z-10">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="bg-slate-800/60 backdrop-blur-sm rounded-3xl p-8 sm:p-12 border border-slate-700/30 text-center relative overflow-hidden">
              {/* Enhanced background decoration */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/5 via-blue-500/5 to-purple-500/5"></div>
              <div className="absolute top-4 left-4 w-20 h-20 border border-blue-400/20 rounded-full"></div>
              <div className="absolute bottom-4 right-4 w-16 h-16 border border-purple-400/20 rounded-full"></div>

              <div className="relative z-10">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">
                  Ready to Work Together?
                </h2>
                <p className="text-gray-300 text-base sm:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                  Let&apos;s collaborate on your next project. I&apos;m here to help bring your ideas to life
                  with cutting-edge design and development solutions.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Link
                    href="/contact"
                    className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg text-sm sm:text-base"
                  >
                    Get In Touch
                  </Link>

                  <Link
                    href="/portfolio"
                    className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-slate-700 hover:bg-slate-600 text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105 border border-slate-600 text-sm sm:text-base"
                  >
                    View My Work
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer - Enhanced Responsive */}
        <footer className="py-6 sm:py-8 relative z-10 border-t border-slate-700/30">
          <div className="container px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-gray-400 text-xs sm:text-sm">
              Copyright © 2025 Kyle Portfolio. All Rights Reserved
            </p>
          </div>
        </footer>
      </div>
    </>
  )
}