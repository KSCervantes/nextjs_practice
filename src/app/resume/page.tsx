'use client'
import React from 'react'
import Image from 'next/image'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import Link from 'next/link'

export default function ResumePage(){
  const { ref, isVisible } = useScrollAnimation()

  // Download Resume Function
  const downloadResume = () => {
    const link = document.createElement('a')
    link.href = '/Kyle Resume (2).pdf' // Path to your PDF file in the public folder
    link.download = 'Kyle Resume (2).pdf' // Name for the downloaded file
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
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
            <h1 className="text-4xl lg:text-5xl font-bold text-white">My Resume</h1>
            <div className="w-12 h-1 bg-blue-400 rounded-full ml-4"></div>
          </div>

          <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-8 leading-relaxed">
            A comprehensive overview of my professional journey, skills, and achievements
            in software development and technology.
          </p>

          {/* Download Button */}
          <button
            onClick={downloadResume}
            className="px-8 py-4 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg mb-16"
          >
            📄 Download PDF Resume
          </button>
        </div>
      </section>

      {/* Resume Content */}
      <section className="pb-20 relative z-10">
        <div className="container">
          <div className="max-w-6xl mx-auto bg-slate-800/60 backdrop-blur-sm rounded-3xl border border-slate-700/30 overflow-hidden">

            {/* Resume Header */}
            <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 p-12 text-center border-b border-slate-700/30">
              <div className="flex flex-col lg:flex-row items-center gap-8">

                {/* Profile Image */}
                <div className="w-40 h-40 rounded-full overflow-hidden">
                  <Image
                    src="/img/resume.png" // Replace with your actual image path
                    alt="Kyle Cervantes Profile"
                    width={160}
                    height={160}
                    className="w-full h-full object-cover object-top"
                    priority
                  />
                </div>

                {/* Personal Info */}
                <div className="flex-1 text-left">
                  <h2 className="text-4xl lg:text-5xl font-bold text-white mb-2">KYLE CERVANTES</h2>
                  <p className="text-blue-400 text-xl font-semibold mb-4">STUDENT & DEVELOPER</p>

                  <div className="grid md:grid-cols-2 gap-4 text-gray-300">
                    <div>
                      <p className="mb-2"><span className="text-blue-400">📱 PHONE:</span> +63 969 209 1715</p>
                      <p className="mb-2"><span className="text-blue-400">✉️ EMAIL:</span> kylecervantes2005@gmail.com</p>
                    </div>
                    <div>
                      <p className="mb-2"><span className="text-blue-400">📍 ADDRESS:</span> Lianga, Surigao del Sur</p>
                      <p className="mb-2"><span className="text-blue-400">🌐 WEBSITE:</span> kyle-cervantes.vercel.app</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-0">

              {/* Left Sidebar */}
              <div className="lg:col-span-1 bg-slate-900/50 p-8 border-r border-slate-700/30">

                {/* Contact Section */}
                <div className="mb-8">
                  <h3 className="text-blue-400 text-lg font-bold mb-4 border-b-2 border-blue-400 pb-2">CONTACT</h3>
                  <div className="space-y-3 text-gray-300 text-sm">
                    <p><strong>PHONE</strong><br/>+63 969 209 1715</p>
                    <p><strong>EMAIL</strong><br/>kylecervantes2005@gmail.com</p>
                    <p><strong>ADDRESS</strong><br/>Lianga, Surigao del Sur</p>
                    <p><strong>WEBSITE</strong><br/>kyle-cervantes.vercel.app</p>
                  </div>
                </div>

                {/* Expertise Section */}
                <div className="mb-8">
                  <h3 className="text-blue-400 text-lg font-bold mb-4 border-b-2 border-blue-400 pb-2">EXPERTISE</h3>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>• Web Development</li>
                    <li>• Mobile Applications</li>
                    <li>• Design Software</li>
                    <li>• Coding</li>
                  </ul>
                </div>

                {/* Languages & Frameworks */}
                <div className="mb-8">
                  <h3 className="text-blue-400 text-lg font-bold mb-4 border-b-2 border-blue-400 pb-2">LANGUAGE & FRAMEWORKS</h3>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>• HTML, JAVASCRIPT, PYTHON</li>
                    <li>• PHP, FLUTTER, REACT, NEXTJS</li>
                    <li>• TAILWIND CSS</li>
                  </ul>
                </div>

                {/* Tools & Platforms */}
                <div className="mb-8">
                  <h3 className="text-blue-400 text-lg font-bold mb-4 border-b-2 border-blue-400 pb-2">TOOLS & PLATFORMS</h3>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>• Github, Supabase, Firebase</li>
                    <li>• Mysql, VS Code, Postman, Git</li>
                  </ul>
                </div>

                {/* Languages */}
                <div className="mb-8">
                  <h3 className="text-blue-400 text-lg font-bold mb-4 border-b-2 border-blue-400 pb-2">LANGUAGE</h3>
                  <div className="space-y-3">
                    <div>
                      <p className="text-gray-300 text-sm mb-1">English</p>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div className="bg-blue-400 h-2 rounded-full" style={{width: '90%'}}></div>
                      </div>
                    </div>
                    <div>
                      <p className="text-gray-300 text-sm mb-1">Filipino</p>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div className="bg-blue-400 h-2 rounded-full" style={{width: '100%'}}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Content */}
              <div className="lg:col-span-2 p-8">

                {/* About Me Section */}
                <div className="mb-8">
                  <h3 className="text-white text-2xl font-bold mb-4 border-b-2 border-blue-400 pb-2">ABOUT ME</h3>
                  <div className="text-gray-300 leading-relaxed space-y-4">
                    <p>
                      I am a dedicated and inspired student currently pursuing my education with the
                      interest in both software and mobile development. I am eager to learn, improve
                      my skills and gain real-world experience. I enjoy working both independently and
                      in teams, and always strive to give my best in everything I do.
                    </p>
                    <p>
                      Outside of coding, I have a deep appreciation for design, enjoy exploring
                      emerging technologies, and engage in creative hobbies that fuel my problem-solving
                      mindset. I also find strength and balance through my faith—attending church and
                      taking time to pray helps keep me grounded and inspired. Always open to new
                      challenges, I&apos;m committed to growing both as a developer and as a person.
                    </p>
                  </div>
                </div>

                {/* Experience Section */}
                <div className="mb-8">
                  <h3 className="text-white text-2xl font-bold mb-4 border-b-2 border-blue-400 pb-2">EXPERIENCE</h3>

                  <div className="space-y-6">
                    {/* Experience 1 */}
                    <div className="border-l-4 border-blue-400 pl-6">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h4 className="text-white text-lg font-semibold">North Eastern Mindanao State University - Main Campus</h4>
                          <p className="text-blue-400 font-medium">Programmer</p>
                        </div>
                        <span className="text-gray-400 text-sm">2022-2024</span>
                      </div>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        During my first and second years in college, we developed a <strong>Barangay Information System</strong> in Tago, Surigao del Sur, as part of our final project. This project aimed to provide and digitize the management of barangay records, including resident information, certificates, and incident reports. I contributed to both the front-end and back-end development, working with my team to design user-friendly interfaces and implement core functionalities. Through this experience, I gained hands-on knowledge in system planning, database management, and collaborative development—laying a strong foundation for my passion in building practical and impactful software solutions.
                      </p>
                    </div>

                    {/* Experience 2 */}
                    <div className="border-l-4 border-blue-400 pl-6">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h4 className="text-white text-lg font-semibold">North Eastern Mindanao State University - Lianga Campus</h4>
                          <p className="text-blue-400 font-medium">Programmer</p>
                        </div>
                        <span className="text-gray-400 text-sm">2024-2025</span>
                      </div>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        Now in my third year of college, we are developing a <strong>Barangay GIS Health Management Website</strong> and a <strong>Community Bulletin Mobile App</strong>. The website maps health data like facility locations, reported illnesses, and demographics to support data-driven decisions. The mobile app delivers real-time announcements, health tips, and alerts to residents. I&apos;m actively involved in both design and development, gaining hands-on experience in full-stack development, data visualization, and building tech solutions for community needs.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Education Section */}
                <div className="mb-8">
                  <h3 className="text-white text-2xl font-bold mb-4 border-b-2 border-blue-400 pb-2">EDUCATION</h3>

                  <div className="space-y-6">
                    {/* Education 1 */}
                    <div className="border-l-4 border-blue-400 pl-6">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h4 className="text-white text-lg font-semibold">North Eastern Mindanao State University</h4>
                          <p className="text-blue-400 font-medium">BS - Computer Science</p>
                        </div>
                        <span className="text-gray-400 text-sm">2022 - Present</span>
                      </div>
                      <p className="text-gray-300 text-sm">
                        Specialized in web and mobile application development with focus on modern frameworks and programming languages.
                        It focuses on developing essential skills such as critical thinking, problem-solving, communication, and collaboration,
                        which are crucial for future academic and professional success.
                      </p>
                    </div>

                    {/* Education 2 */}
                    <div className="border-l-4 border-blue-400 pl-6">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h4 className="text-white text-lg font-semibold">Lianga National Comprehensive High School</h4>
                          <p className="text-blue-400 font-medium">Secondary - Senior High School</p>
                        </div>
                        <span className="text-gray-400 text-sm">2016 - 2021</span>
                      </div>
                      <p className="text-gray-300 text-sm">
                        Foundational skills and early education that prepared me for higher education and professional development.
                      </p>
                    </div>

                    {/* Education 3 */}
                    <div className="border-l-4 border-blue-400 pl-6">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h4 className="text-white text-lg font-semibold">Lianga Central Elementary School</h4>
                          <p className="text-blue-400 font-medium">Primary School</p>
                        </div>
                        <span className="text-gray-400 text-sm">2009 - 2015</span>
                      </div>
                      <p className="text-gray-300 text-sm">
                        Foundational skills and early education.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="text-center mt-12">
            <div className="flex flex-wrap gap-4 justify-center">
              <button
                onClick={downloadResume}
                className="px-8 py-4 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                📄 Download Resume
              </button>

              <Link
                href="/contact"
                className="px-8 py-4 bg-slate-700 hover:bg-slate-600 text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105 border border-slate-600"
              >
                📧 Contact Me
              </Link>

              <Link
                href="/portfolio"
                className="px-8 py-4 bg-slate-700 hover:bg-slate-600 text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105 border border-slate-600"
              >
                💼 View Portfolio
              </Link>
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
  )
}