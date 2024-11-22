'use client'

import Link from 'next/link'
import { useEffect } from 'react'

export default function Header() {
  useEffect(() => {
    const handleScroll = (e: Event) => {
      e.preventDefault()
      const href = (e.currentTarget as HTMLAnchorElement).getAttribute('href')
      if (href?.startsWith('#')) {
        const targetId = href.replace('#', '')
        const elem = document.getElementById(targetId)
        elem?.scrollIntoView({ behavior: 'smooth' })
      }
    }

    const links = document.querySelectorAll('a[href^="#"]')
    links.forEach(link => {
      link.addEventListener('click', handleScroll)
    })

    return () => {
      links.forEach(link => {
        link.removeEventListener('click', handleScroll)
      })
    }
  }, [])

  return (
    <header className="bg-[#FAF6EF] p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-end items-center space-x-4">
        <Link href="#services">
          <button className="bg-[#B1030E] text-white font-roboto-mono py-2 px-6 rounded-full shadow-md transition duration-300 ease-in-out hover:bg-[#F24957] hover:shadow-lg">
            Diensten
          </button>
        </Link>
        <Link href="#contact">
          <button className="bg-[#B9E1F6] text-[#0D0D0D] font-roboto-mono py-2 px-6 rounded-full shadow-md transition duration-300 ease-in-out hover:bg-[#A0C4E0] hover:shadow-lg">
            Contact
          </button>
        </Link>
      </div>
    </header>
  )
}

