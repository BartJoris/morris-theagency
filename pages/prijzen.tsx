import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

const Prijzen = () => {
  return (
    <section className="bg-[#FAF6EF] py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <Link href="/" className="text-[#B1030E] font-roboto-mono text-3xl inline-block mb-4 absolute top-4 left-4">
          <ArrowLeft />
        </Link>
        {/* Social Media Section */}
        <section className="social-media mb-12">
          <h2 className="text-6xl font-roboto-mono text-[#B1030E] mb-6">Talking money</h2>
          <p className="text-4xl font-roboto-mono text-[#B1030E] mb-12">Social media beheer</p>
          <div className="grid md:grid-cols-3 gap-12 mb-8">
            <div className="bg-[#FAF6EF] p-8 rounded-lg border-2 border-[#B1030E] relative">
              <h3 className="text-3xl font-roboto-mono mb-2 absolute -top-4 left-4 bg-[#FAF6EF] px-2">BRONS</h3>
              <div className="flex justify-between">
                <div className="flex-1">
                  <p className="text-left">brons: 1 post per week, met eigen fotomateriaal</p>
                  <p className="text-left mt-8">brons plus: 1 post per week, + 1 fotoreportage van 2u</p>
                </div>
                <div className="flex-none text-right">
                  <p>€200/maand</p>
                  <p className="mt-14">€350/maand</p>
                </div>
              </div>
            </div>
            <div className="bg-[#FAF6EF] p-8 rounded-lg border-2 border-[#B1030E] relative">
              <h3 className="text-3xl font-roboto-mono mb-2 absolute -top-4 left-4 bg-[#FAF6EF] px-2">ZILVER</h3>
              <div className="flex justify-between">
                <div className="flex-1">
                  <p className="text-left">zilver: 2 posts per week, met eigen fotomateriaal</p>
                  <p className="text-left mt-8">zilver plus: 2 posts per week, + 1 fotoreportage van 2u</p>
                </div>
                <div className="flex-none text-right">
                  <p>€350/maand</p>
                  <p className="mt-14">€500/maand</p>
                </div>
              </div>
            </div>
            <div className="bg-[#FAF6EF] p-8 rounded-lg border-2 border-[#B1030E] relative">
              <h3 className="text-3xl font-roboto-mono mb-2 absolute -top-4 left-4 bg-[#FAF6EF] px-2">GOUD</h3>
              <div className="flex justify-between">
                <div className="flex-1">
                  <p className="text-left">goud: 4 posts per week, met eigen fotomateriaal</p>
                  <p className="text-left mt-8">goud plus: 4 posts per week, + 1 fotoreportage van 2u</p>
                </div>
                <div className="flex-none text-right">
                  <p>€500/maand</p>
                  <p className="mt-14">€650/maand</p>
                </div>
              </div>
            </div>
          </div>
          <div className="ribbon-container relative mb-16">
            <div className="ribbon bg-red-500 text-white font-semibold py-2 px-4 rounded-full shadow-lg absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-full md:w-auto text-center">
              Starten kan bij ons zonder opstartkost!
            </div>
          </div>
          <div className="bg-blue-100 p-8 rounded-lg border-2 border-[#B1030E] relative">
            <p className="text-xl font-roboto-mono text-[#B1030E] hover:text-[#F24957] transition-colors text-center">Een jaar lang abonnement bij Morris?</p>
            <p className="text-xl font-roboto-mono text-[#B1030E] hover:text-[#F24957] transition-colors text-center">Dan geniet jij van twee maand gratis content!</p>
            <div className="absolute top-2 right-1 transform translate-x-1/4 bg-[#F24957] text-white font-roboto-mono px-4 py-1 rotate-45">
              <span>10 + 2</span>
            </div>
          </div>
          <p className="text font-roboto-mono text-[#B1030E] hover:text-[#F24957] transition-colors mt-4">* Deze abonnementen bieden wij aan per kwartaal.</p>
        </section>

        {/* Inclusief & Extra's Section */}
        <section className="inclusief-extras mb-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-[#FAF6EF] p-8 rounded-lg border-2 border-[#B1030E] relative">
              <h3 className="text-3xl font-roboto-mono mb-2 absolute -top-4 left-4 bg-[#FAF6EF] px-2">INCLUSIEF</h3>
              <ul className="list-disc pl-5">
                <li>Opstartkost</li>
                <li>Persoonlijke aanpak</li>
                <li>Eigen contentplanning per maand</li>
                <li>Copy die jouw doelgroep écht aanspreekt</li>
                <li>Een opvolging van de content</li>
                <li>Statistieken per kwartaal</li>
                <li>Beheren van reacties en interactie met volgers gedurende 24 uur na plaatsen post</li>
              </ul>
            </div>
            <div className="bg-[#FAF6EF] p-8 rounded-lg border-2 border-[#B1030E] relative">
              <h3 className="text-3xl font-roboto-mono mb-2 absolute -top-4 left-4 bg-[#FAF6EF] px-2">EXTRA&apos;S</h3>
              <ul className="list-disc pl-5">
                <li className="flex justify-between">
                  <span>Fotoshoot van 2u</span>
                  <span>€200</span>
                </li>
                <li className="flex justify-between">
                  <span>Instagram story</span>
                  <span>€10</span>
                </li>
                <li className="flex justify-between">
                  <span>Video voor reels of TikTok</span>
                  <span>€50</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Fotografie Section */}
        <section className="fotografie mb-12">
          <h3 className="text-4xl font-roboto-mono mb-16">Fotografie</h3>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="bg-[#FAF6EF] p-8 rounded-lg border-2 border-[#B1030E] relative">
              <h4 className="text-2xl font-roboto-mono mb-2 absolute -top-4 left-4 bg-[#FAF6EF] px-2">PRODUCTFOTO&apos;S</h4>
              <div className="flex justify-between">
                <span>Administratieve opstartkost</span>
                <span>€75</span>
              </div>
              <div className="flex justify-between">
                <span>Nabewerkte foto</span>
                <span>€12</span>
              </div>
              <p>** kan variëren naargelang artikel & nabewerking</p>
            </div>
            <div className="bg-[#FAF6EF] p-8 rounded-lg border-2 border-[#B1030E] relative">
              <h4 className="text-2xl font-roboto-mono mb-2 absolute -top-4 left-4 bg-[#FAF6EF] px-2">LIFESTYLEFOTO&apos;S</h4>
              <div className="flex justify-between">
                <span>Administratieve opstartkost</span>
                <span>€75</span>
              </div>
              <div className="flex justify-between">
                <span>Fotoshoot, 15 afgewerkte beelden per uur</span>
                <span>€100/u</span>
              </div>
              <div className="flex justify-between">
                <span>Extra afgewerkte beelden</span>
                <span>€10/foto</span>
              </div>
              <div className="flex justify-between">
                <span>Reisvergoeding vanaf 50km</span>
                <span>€0,40/km</span>
              </div>
            </div>
            <div className="bg-[#FAF6EF] p-8 rounded-lg border-2 border-[#B1030E] relative">
              <h4 className="text-2xl font-roboto-mono mb-2 absolute -top-4 left-4 bg-[#FAF6EF] px-2">SPORTFOTO&apos;S</h4>
              <p>Omdat elk sportevenement uniek is, kunnen wij geen standaardprijzen aanbieden.</p>
              <p>Om een op maat gemaakte offerte te kunnen geven, bespreken we graag de details van jouw evenement. Dit omvat onder andere:</p>
              <ul className="list-disc pl-5">
                <li>Het type sport</li>
                <li>De duur</li>
                <li>De locatie van het evenement</li>
                <li>Het aantal beelden dat gewenst is</li>
                <li>Eventuele reiskosten (voor evenementen buiten de regio)</li>
              </ul>
              <p>Neem gerust contact met ons op voor een persoonlijk gesprek en een offerte die specifiek aansluit bij jouw wensen en het evenement.</p>
            </div>
          </div>
          <p className="text font-roboto-mono text-[#B1030E] hover:text-[#F24957] transition-colors mt-4">* Al onze tarieven zijn exclusief btw.</p>
        </section>

        {/* Vragen Section */}
        <section className="vragen text-center">
          <h2 className="text-5xl font-roboto-mono text-[#B1030E] mb-8">VRAGEN?</h2>
          <p className="text-2xl font-roboto-mono text-[#B1030E] mb-1">Niet gevonden wat je zocht? Neem gerust</p>
          <p className="text-2xl font-roboto-mono text-[#B1030E] mb-1">contact met ons op, dan kijken we samen om</p>
            <p className="text-2xl font-roboto-mono text-[#B1030E] mb-10">een pakket op maat samen te stellen!</p>
          <a href="mailto:wiese@morristheagency.be" className="bg-[#F24957] text-white px-8 py-4 rounded-full font-roboto-mono inline-block">wiese@morristheagency.be</a>
        </section>
      </div>
    </section>
  );
};

export default Prijzen;
