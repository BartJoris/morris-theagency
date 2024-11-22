'use client'

import Link from 'next/link'
import Image from 'next/image'
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
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-4xl font-vibes text-[#B1030E]">
          <Image src="/morris-theagency/assets/logo.png" alt="Morris The Agency Logo" width={150} height={50} />
        </Link>
        <nav>
          <ul className="flex space-x-4 font-roboto-mono text-[#0D0D0D]">
            <li><Link href="#services">Services</Link></li>
            <li><Link href="#contact">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

