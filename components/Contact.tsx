import Link from 'next/link'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Mail,Facebook, Instagram, Linkedin } from 'lucide-react'
import Image from 'next/image'

export default function Contact() {
  return (
    <section id="contact" className="bg-[#FAF6EF] py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Title on the left */}
          <div className="text-left">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-roboto-mono text-[#B1030E] leading-tight">
              Samen die molen laten draaien
            </h2>
          </div>

          {/* Pinwheel in the middle */}
          <div className="flex justify-center">
            <div className="w-32 h-32 animate-spin-slow">
              <Image src="/morris-theagency/assets/pinwheel.svg" alt="Decorative pinwheel" width={128} height={128} />
            </div>
          </div>

          {/* Contact info on the right */}
          <div className="text-right">
            <p className="text-xl font-roboto-mono text-[#F24957] mb-4">
              Zin om jouw bedrijf een boost te geven? Say hi! 👋
            </p>
            <Link 
              href="mailto:wiese@morristheagency.be"
              className="text-xl font-roboto-mono text-[#B1030E] hover:text-[#F24957] transition-colors"
            >
              wiese@morristheagency.be
            </Link>
            <p className="text-xl font-roboto-mono text-[#B1030E] my-2">
              +32 494 38 22 85
            </p>
            <div className="flex justify-end space-x-4 mt-4">
              <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Facebook className="w-8 h-8 text-[#B1030E] hover:text-[#F24957] transition-colors" />
              </Link>
              <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram className="w-8 h-8 text-[#B1030E] hover:text-[#F24957] transition-colors" />
              </Link>
              <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="w-8 h-8 text-[#B1030E] hover:text-[#F24957] transition-colors" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

