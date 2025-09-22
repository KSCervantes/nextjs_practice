'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import Link from 'next/link'
import LoadingScreen from '../components/LoadingScreen'

export default function AboutPage(){
  const { ref, isVisible } = useScrollAnimation()
  const [isLoading, setIsLoading] = useState(true)

  // Loading effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2200)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <LoadingScreen
        isLoading={isLoading}
        subtitle="Getting to know me better..."
      />

      <div className="pt-16 min-h-screen relative overflow-hidden"
           style={{background: 'linear-gradient(135deg, #0c0f1a 0%, #1a1f2e 100%)'}}>

        {/* Decorative 3D Elements */}
        <div className="floating-triangle top-20 left-10" style={{animationDelay: '0s'}}></div>
        <div className="floating-circle-3d top-32 right-20" style={{animationDelay: '2s'}}></div>
        <div className="floating-circle-3d bottom-40 left-20 w-12 h-12" style={{animationDelay: '4s'}}></div>
        <div className="floating-triangle bottom-32 right-16 rotate-180" style={{animationDelay: '1s'}}></div>

        {/* Blue accent dots */}
        <div className="absolute top-24 right-1/3 w-4 h-4 bg-slate-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/3 right-32 w-3 h-3 bg-blue-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/4 left-1/4 w-2 h-2 bg-slate-300 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>

        <section
          ref={ref}
          className={`section flex items-center transition-all duration-700 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
        <div className="container grid lg:grid-cols-2 gap-16 items-center relative z-10">

          {/* Left Side - Profile Image */}
          <div className={`order-2 lg:order-1 flex justify-center ${isVisible ? 'slide-in-left' : ''}`}>
            <div className="relative">

              {/* Main Profile Container - Transparent */}
              <div className="w-80 h-96 lg:w-96 lg:h-[480px] rounded-3xl flex items-end justify-center relative">
                {/* Profile Image */}
                <div className="w-72 h-80 lg:w-80 lg:h-96 rounded-t-3xl overflow-hidden relative z-10">
                  <Image
                    src="/img/profile2-bg.png" // Replace with your actual image path
                    alt="Kyle Cervantes Profile"
                    width={320}
                    height={384}
                    className="w-full h-full object-cover object-top"
                    priority
                  />
                </div>
              </div>

              {/* Floating Experience Badge */}
              <div className="experience-badge -top-4 -left-8">
                <div className="text-2xl font-bold">12</div>
                <div className="text-sm uppercase tracking-wide">
                  YEARS<br/>
                  OF EXPERIENCE
                </div>
              </div>

              {/* Floating Rating Badge */}
              <div className="rating-badge -bottom-6 -right-8">
                <div className="flex items-center space-x-2">
                  <div className="flex text-yellow-300">
                    {'★'.repeat(5)}
                  </div>
                  <div className="text-lg font-bold">4.9</div>
                </div>
                <div className="text-xs mt-1">700+ Clients Reviews</div>
              </div>

            </div>
          </div>

          {/* Right Side - Content */}
          <div className={`order-1 lg:order-2 ${isVisible ? 'slide-in-right' : ''}`}>

            {/* Section Header with Blue Line */}
            <div className="flex items-center mb-8">
              <div className="w-12 h-1 bg-blue-400 rounded-full mr-4"></div>
              <h1 className="text-4xl lg:text-5xl font-bold text-white">About Me</h1>
            </div>

            {/* Who I'm Section */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-600/40 mb-8">
              <h2 className="text-2xl font-semibold text-white mb-6">Who am I?</h2>

              <div className="space-y-4 text-gray-300 leading-relaxed text-justify">
                <p>
                  I’m Kyle S. Cervantes, a passionate Computer Science student at North Eastern Mindanao State University (NEMSU), Philippines, with over 2 years of experience in web and mobile app development. At just 21 years old,
                  I’ve already worked with 6+ clients and completed 4+ projects, ranging from websites to full-featured mobile applications.
                </p>

                <p>
                  I specialize in building modern, user-friendly, and efficient solutions using technologies like Laravel, Vue.js, React, Flutter, Firebase, and Python. Beyond coding,
                  I’m usually exploring my other passions—hiking, basketball, softball, or gaming with friends in Dota 2, Mobile Legends, and NBA 2K.
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link
                href="/resume"
                className="px-8 py-4 bg-slate-600 hover:bg-slate-600 text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                Download Resume
              </Link>

              <Link
                href="/contact"
                className="px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                Hire Me
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 relative z-10">
        <div className="container">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-8">
              <div className="w-12 h-1 bg-blue-400 rounded-full mr-4"></div>
              <h2 className="text-4xl lg:text-5xl font-bold text-white">Education</h2>
              <div className="w-12 h-1 bg-blue-400 rounded-full ml-4"></div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-400 to-slate-500"></div>

              {/* Education Items */}
              <div className="space-y-16">
                {/* Education Item 1 */}
                <div className="relative flex items-center">
                  <div className="w-1/2 pr-8 text-right">
                    <div className="bg-slate-800/60 backdrop-blur-sm rounded-xl p-6 border border-slate-600/40 hover:border-blue-400/50 transition-all duration-300">
                      <h3 className="text-xl font-bold text-white mb-2">Bachelor of Science in Computer Science</h3>
                      <p className="text-blue-400 font-semibold mb-2">North Eastern Mindanao State University</p>
                      <p className="text-gray-300 text-sm">Specialized in Software Engineering and Web Development</p>
                    </div>
                  </div>

                  {/* Timeline Node */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-blue-400 rounded-full border-4 border-slate-900 z-10"></div>

                  <div className="w-1/2 pl-8">
                    <div className="bg-blue-400/10 rounded-lg p-4 border border-blue-400/30">
                      <span className="text-blue-400 font-bold text-lg">2022 - 2026</span>
                    </div>
                  </div>
                </div>

                {/* Education Item 2 */}
                <div className="relative flex items-center">
                  <div className="w-1/2 pr-8">
                    <div className="bg-blue-400/10 rounded-lg p-4 border border-blue-400/30 text-right">
                      <span className="text-blue-400 font-bold text-lg">2016 - 2022</span>
                    </div>
                  </div>

                  {/* Timeline Node */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-blue-400 rounded-full border-4 border-slate-900 z-10"></div>

                  <div className="w-1/2 pl-8">
                    <div className="bg-slate-800/60 backdrop-blur-sm rounded-xl p-6 border border-slate-600/40 hover:border-blue-400/50 transition-all duration-300">
                      <h3 className="text-xl font-bold text-white mb-2">Lianga National Comprehensive High School</h3>
                      <p className="text-blue-400 font-semibold mb-2">Humss Strand</p>
                      <p className="text-gray-300 text-sm">Specialized in Liberal Arts and Social Sciences</p>
                    </div>
                  </div>
                </div>

                {/* Education Item 3 */}
                <div className="relative flex items-center">
                  <div className="w-1/2 pr-8 text-right">
                    <div className="bg-slate-800/60 backdrop-blur-sm rounded-xl p-6 border border-slate-600/40 hover:border-blue-400/50 transition-all duration-300">
                      <h3 className="text-xl font-bold text-white mb-2">Lianga Central Elementary School</h3>
                      <p className="text-blue-400 font-semibold mb-2">Primary Education</p>
                      <p className="text-gray-300 text-sm">Generalizations for basic Studies with focus on Mathematics, English, Filipino and Science</p>
                    </div>
                  </div>

                  {/* Timeline Node */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-blue-400 rounded-full border-4 border-slate-900 z-10"></div>

                  <div className="w-1/2 pl-8">
                    <div className="bg-blue-400/10 rounded-lg p-4 border border-blue-400/30">
                      <span className="text-blue-400 font-bold text-lg">2010 - 2016</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 relative z-10">
        <div className="container">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-8">
              <div className="w-12 h-1 bg-blue-400 rounded-full mr-4"></div>
              <h2 className="text-4xl lg:text-5xl font-bold text-white">Experience</h2>
              <div className="w-12 h-1 bg-blue-400 rounded-full ml-4"></div>
            </div>
          </div>

          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
            {/* Experience Item 1 */}
            <div className="bg-slate-800/60 backdrop-blur-sm rounded-xl p-8 border border-slate-600/40 hover:border-blue-400/50 transition-all duration-300 group">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center text-slate-900 font-bold text-xl group-hover:scale-110 transition-transform">
                  01
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">Full Stack Developer</h3>
                  <p className="text-blue-400 font-semibold mb-2">LinkedIn</p>
                  <p className="text-gray-400 text-sm mb-4">2024 - Present</p>
                  <p className="text-gray-300 leading-relaxed">
                    Leading development of cloud-based applications, managing team of 8 developers,
                    and implementing scalable solutions for enterprise clients.
                  </p>
                </div>
              </div>
            </div>

            {/* Experience Item 2 */}
            <div className="bg-slate-800/60 backdrop-blur-sm rounded-xl p-8 border border-slate-600/30 hover:border-blue-400/50 transition-all duration-300 group">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center text-slate-900 font-bold text-xl group-hover:scale-110 transition-transform">
                  02
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">Mobile App Developer</h3>
                  <p className="text-blue-400 font-semibold mb-2">Freelance</p>
                  <p className="text-gray-400 text-sm mb-4">2025</p>
                  <p className="text-gray-300 leading-relaxed">
                    Developed and maintained mobile applications using Flutter and Firebase.
                    Collaborated with designers to create user-friendly interfaces.
                  </p>
                </div>
              </div>
            </div>

            {/* Experience Item 3 */}
            <div className="bg-slate-800/60 backdrop-blur-sm rounded-xl p-8 border border-slate-600/30 hover:border-blue-400/50 transition-all duration-300 group">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center text-slate-900 font-bold text-xl group-hover:scale-110 transition-transform">
                  03
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">Frontend Developer</h3>
                  <p className="text-blue-400 font-semibold mb-2">Freelance</p>
                  <p className="text-gray-400 text-sm mb-4">2022 - Present</p>
                  <p className="text-gray-300 leading-relaxed">
                    Specialized in creating responsive user interfaces using modern JavaScript frameworks
                    and ensuring cross-browser compatibility.
                  </p>
                </div>
              </div>
            </div>

            {/* Experience Item 4 */}
            <div className="bg-slate-800/60 backdrop-blur-sm rounded-xl p-8 border border-slate-600/30 hover:border-blue-400/50 transition-all duration-300 group">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center text-slate-900 font-bold text-xl group-hover:scale-110 transition-transform">
                  04
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">On the Job Training</h3>
                  <p className="text-blue-400 font-semibold mb-2">Open Space Technologies Inc. -- Cebu, Philippines</p>
                  <p className="text-gray-400 text-sm mb-4">2025</p>
                  <p className="text-gray-300 leading-relaxed">
                    Started career developing web applications, learning best practices,
                    and contributing to various client projects.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills & Tools Section */}
      <section className="py-20 relative z-10">
        <div className="container">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-8">
              <div className="w-12 h-1 bg-blue-400 rounded-full mr-4"></div>
              <h2 className="text-4xl lg:text-5xl font-bold text-white">Skills & Tools</h2>
              <div className="w-12 h-1 bg-blue-400 rounded-full ml-4"></div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {/* Figma */}
              <div className="bg-slate-800/60 backdrop-blur-sm rounded-xl p-8 border border-slate-600/30 hover:border-blue-400/50 transition-all duration-300 group text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-white text-2xl font-bold group-hover:scale-110 transition-transform">
                  F
                </div>
                <h3 className="text-white font-semibold">Figma</h3>
                <p className="text-gray-400 text-sm mt-2">UI/UX Design</p>
              </div>

              {/* Photoshop */}
              <div className="bg-slate-800/60 backdrop-blur-sm rounded-xl p-8 border border-slate-600/30 hover:border-blue-400/50 transition-all duration-300 group text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl flex items-center justify-center text-white text-2xl font-bold group-hover:scale-110 transition-transform">
                  Ps
                </div>
                <h3 className="text-white font-semibold">Photoshop</h3>
                <p className="text-gray-400 text-sm mt-2">Photo Editing</p>
              </div>

              {/* Illustrator */}
              <div className="bg-slate-800/60 backdrop-blur-sm rounded-xl p-8 border border-slate-600/30 hover:border-blue-400/50 transition-all duration-300 group text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-orange-500 to-yellow-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold group-hover:scale-110 transition-transform">
                  Ai
                </div>
                <h3 className="text-white font-semibold">Illustrator</h3>
                <p className="text-gray-400 text-sm mt-2">Vector Graphics</p>
              </div>

              {/* After Effects */}
              <div className="bg-slate-800/60 backdrop-blur-sm rounded-xl p-8 border border-slate-600/30 hover:border-blue-400/50 transition-all duration-300 group text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-600 to-indigo-700 rounded-2xl flex items-center justify-center text-white text-2xl font-bold group-hover:scale-110 transition-transform">
                  Ae
                </div>
                <h3 className="text-white font-semibold">After Effects</h3>
                <p className="text-gray-400 text-sm mt-2">Motion Graphics</p>
              </div>
            </div>

            {/* Additional Skills */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-slate-800/60 backdrop-blur-sm rounded-xl p-6 border border-slate-600/30">
                <h4 className="text-blue-400 font-semibold mb-3">Frontend</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-400/20 text-blue-300 rounded-full text-sm">React</span>
                  <span className="px-3 py-1 bg-blue-400/20 text-blue-300 rounded-full text-sm">Next.js</span>
                  <span className="px-3 py-1 bg-blue-400/20 text-blue-300 rounded-full text-sm">TypeScript</span>
                  <span className="px-3 py-1 bg-blue-400/20 text-blue-300 rounded-full text-sm">Tailwind CSS</span>
                  <span className="px-3 py-1 bg-blue-400/20 text-blue-300 rounded-full text-sm">HTML & CSS</span>
                  <span className="px-3 py-1 bg-blue-400/20 text-blue-300 rounded-full text-sm">Bootstrap</span>
                  <span className="px-3 py-1 bg-blue-400/20 text-blue-300 rounded-full text-sm">Vue</span>
                  <span className="px-3 py-1 bg-blue-400/20 text-blue-300 rounded-full text-sm">Laravel</span>
                  <span className="px-3 py-1 bg-blue-400/20 text-blue-300 rounded-full text-sm">Flutter</span>
                </div>
              </div>

              <div className="bg-slate-800/60 backdrop-blur-sm rounded-xl p-6 border border-slate-600/30">
                <h4 className="text-blue-400 font-semibold mb-3">Backend</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-400/20 text-blue-300 rounded-full text-sm">Node.js</span>
                  <span className="px-3 py-1 bg-blue-400/20 text-blue-300 rounded-full text-sm">Python</span>
                  <span className="px-3 py-1 bg-blue-400/20 text-blue-300 rounded-full text-sm">Supabase</span>
                  <span className="px-3 py-1 bg-blue-400/20 text-blue-300 rounded-full text-sm">MySQL</span>
                </div>
              </div>

              <div className="bg-slate-800/60 backdrop-blur-sm rounded-xl p-6 border border-slate-600/30">
                <h4 className="text-blue-400 font-semibold mb-3">Cloud & DevOps</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-400/20 text-blue-300 rounded-full text-sm">Firebase</span>
                  <span className="px-3 py-1 bg-blue-400/20 text-blue-300 rounded-full text-sm">Docker</span>
                  <span className="px-3 py-1 bg-blue-400/20 text-blue-300 rounded-full text-sm">Git</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 relative z-10 border-t border-slate-600/30">
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