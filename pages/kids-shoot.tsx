import NextImage from 'next/image'
import Head from 'next/head'
import type { NextPage } from 'next'
import { useState } from 'react'
import ImageModal from '../components/ImageModal'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

const KidsShoot: NextPage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState<number | null>(null);

  const images = [
    { id: 1, src: '/assets/kids-shoot-1.jpg' },
    { id: 2, src: '/assets/kids-shoot-2.jpg' },
    { id: 3, src: '/assets/kids-shoot-3.jpg' },
    { id: 4, src: '/assets/kids-shoot-4.jpg' },
  ];

  const handleNext = () => {
    if (currentImageIndex !== null && currentImageIndex < images.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentImageIndex !== null && currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  return (
    <>
      <Head>
        <title>Nieuw! Fun Kids Shoot | Morris</title>
        <meta name="description" content="Fun Kids Shoot bij Morris - Voor onvergetelijke herinneringen van jouw kiddo's!" />
      </Head>

      <div className="bg-[#FAF6EF] min-h-screen px-4 py-12 font-montserrat">
        <Link href="/" className="text-[#B1030E] font-roboto-mono text-3xl inline-block mb-4 absolute top-4 left-4">
          <ArrowLeft />
        </Link>

        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <h1 className="text-4xl md:text-5xl text-center mb-8 font-roboto-mono text-[#B1030E]">
            Nieuw!<span className="text-yellow-400">❤️</span>Fun Kids Shoot<span className="text-yellow-400">❤️</span>
          </h1>

          {/* Content */}
          <div className="space-y-6 text-center mb-12">
            <p className="text-xl font-roboto-mono text-[#F24957]">
              Leuk nieuws! Vanaf nu kun je bij Morris terecht voor leuke kids fotoshoots!
            </p>
            
            <p className="text-lg font-roboto-mono text-[#F24957]">
              Wat houdt dat in? Jij kiest of je de fotoshoot in onze studio wilt doen of op
              het strand-perfect voor prachtige beelden van jouw kiddo&apos;s! 👶🎈😊
            </p>

            <p className="text-lg font-roboto-mono text-[#F24957]">
              Denk aan mooie communiefoto&apos;s in de feestoutfit van je zoon of dochter, of
              een leuke shoot voor een verjaardagskaartje. Wat je ook in gedachten hebt,
              wij zorgen met plezier voor onvergetelijke herinneringen!
            </p>

            <p className="text-lg font-roboto-mono text-[#F24957]">
              Stuur een mailtje naar{' '}
              <a 
                href="mailto:wiese@morristheagency.be" 
                className="underline hover:text-[#B1030E] transition-colors"
              >
                wiese@morristheagency.be
              </a>{' '}
              voor meer info!
            </p>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {images.map((image, index) => (
              <div 
                key={image.id} 
                className="relative aspect-[3/4] bg-white p-2 cursor-pointer transition-transform hover:scale-[1.02] border-2 border-[#B1030E]"
                onClick={() => setCurrentImageIndex(index)}
              >
                <NextImage
                  src={image.src}
                  alt={`Kids shoot example ${image.id}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="text-center mt-12">
            <a
              href="mailto:wiese@morristheagency.be?subject=Fun Kids Shoot Aanvraag"
              className="inline-block bg-[#F24957] text-white px-8 py-4 rounded-full font-roboto-mono hover:bg-[#B1030E] transition-colors"
            >
              Wij willen een Fun Kids Shoot! ❤️
            </a>
          </div>
        </div>
      </div>

      <ImageModal
        isOpen={currentImageIndex !== null}
        onClose={() => setCurrentImageIndex(null)}
        currentImageSrc={currentImageIndex !== null ? images[currentImageIndex].src : ''}
        onNext={handleNext}
        onPrevious={handlePrevious}
        hasNext={currentImageIndex !== null && currentImageIndex < images.length - 1}
        hasPrevious={currentImageIndex !== null && currentImageIndex > 0}
      />
    </>
  )
}

export default KidsShoot 