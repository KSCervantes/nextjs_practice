import React from 'react'


export default function Footer(){
return (
<footer className="py-8">
<div className="container text-center text-gray-400">© {new Date().getFullYear()} Kyle. Built with Next.js + Tailwind.</div>
</footer>
)
}