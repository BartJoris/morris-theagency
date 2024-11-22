'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Plus, Minus } from 'lucide-react'
import { Button } from "@/components/ui/button"

const services = [
  {
    title: 'productfotografie',
    content: "Verkoop je online? Dan zijn productfoto’s essentieel voor je webshop. Met beelden die jouw product of dienst op de juiste manier weergeven, overtuig je klanten en bouw je vertrouwen op. Wij zorgen niet alleen voor een accurate weergave van je artikelen, maar creëren ook esthetisch mooie foto's die passen bij jouw merk en de juiste sfeer overbrengen."
  },
  {
    title: 'lifestyle fotografie',
    content: "Wil je meer dan alleen je product of dienst laten zien? Dan kunnen we je misschien helpen met lifestylefotografie! Deze beelden versterken jouw merkidentiteit en zijn perfect inzetbaar op je website, social media, of in offline communicatie! Wat dit oplevert? Een herkenbare uitstraling, helderheid voor je klant én uiteindelijk meer klanten! Klinkt goed, toch? ;)"
  },
  {
    title: 'Merkverhalen',
    content: "Met onze merkverhalen vertaal je jouw waarden direct naar je publiek via beeld en tekst. Samen duiken we in jouw authentieke verhaal, wat we vervolgens omzetten in een krachtige tekst, aangevuld met een fotoreportage. Het resultaat? Originele content die niet alleen nieuwe fans aantrekt, maar ook de band met je bestaande klanten versterkt!"
  },
  {
    title: 'Social media',
    content: "Vind je het lastig om met content aan de slag te gaan, of heb je er simpelweg geen tijd voor? Wij helpen je graag met social media beheer! We stellen een op maat gemaakte contentplanning voor je samen, zodat jij je geen zorgen meer hoeft te maken over wat je nu weer moet posten! Bye bye social media stress!"
  }
]

export default function Services() {
  const [openService, setOpenService] = useState<number | null>(null)

  const toggleService = (index: number) => {
    setOpenService(openService === index ? null : index)
  }

  return (
    <section id="services" className="bg-[#B1030E] py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-6xl font-roboto-mono text-white mb-8">
          Wat wij doen
        </h2>
        
        <p className="text-white font-roboto-mono text-xl mb-12 max-w-3xl">
          Omdat elk bedrijf anders is, bieden wij verschillende diensten aan! Vind hieronder wat het beste bij jou en je zaak past!
        </p>

        <div className="space-y-4 mb-12">
          {services.map((service, index) => (
            <div key={index} className="border-b border-white/20 last:border-b-0">
              <Button 
                variant="ghost" 
                onClick={() => toggleService(index)}
                className="w-full flex justify-between items-center text-white hover:text-white hover:bg-[#F24957] transition-colors p-4 text-xl font-roboto-mono"
              >
                {service.title}
                {openService === index ? (
                  <Minus className="h-6 w-6" />
                ) : (
                  <Plus className="h-6 w-6" />
                )}
              </Button>
              {openService === index && (
                <div className="p-4 text-white font-roboto-mono">
                  {service.content}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="h-64 md:h-80 relative">
            <Image
              src="/assets/services-image-1.jpg"
              alt="Cyclist on a gravel bike"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <div className="h-64 md:h-80 relative">
            <Image
              src="/assets/services-image-2.jpg"
              alt="Child in yellow jacket"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <div className="h-64 md:h-80 relative">
            <Image
              src="/assets/services-image-3.jpg"
              alt="Modern kitchen interior"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        </div>

        <div className="text-center">
          <p className="inline-block bg-[#F24957] text-white px-8 py-4 rounded-full font-roboto-mono">
            Neem contact met ons op voor meer informatie en prijsdetails! 🌸
          </p>
        </div>
      </div>
    </section>
  )
}

