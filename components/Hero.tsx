import Image from 'next/image'

export default function Hero() {
  return (
    <section className="bg-[#FAF6EF] py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Logo Section */}
        <div className="relative flex flex-col items-center mb-16">
          <Image
            src="/assets/morris-the-agency.png"
            alt="Morris The Agency"
            width={300}
            height={100}
            className="object-contain"
          />
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
          {[
            '/assets/hero-image-1.jpg',
            '/assets/hero-image-2.jpg',
            '/assets/hero-image-3.jpg'
          ].map((src, index) => (
            <div
              key={index}
              className="relative aspect-[3/4] border-2 border-[#B1030E]"
            >
              <Image
                src={src}
                alt={`Portfolio image ${index + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>

        {/* Text Section */}
        <div className="text-center font-roboto-mono text-[#B1030E] space-y-2">
          <p className="text-2xl md:text-3xl tracking-wider">
            MORRIS IS EEN CREATIEVE AGENCY,
          </p>
          <div className="text-2xl md:text-3xl tracking-wider flex flex-wrap justify-center gap-x-2">
            <span>GESPECIALISEERD IN</span>
            <span className="relative inline-flex items-center">
              <span className="relative z-10 px-2">FOTOGRAFIE</span>
              <span className="absolute inset-0 border-2 border-[#B1030E] rounded-full"></span>
            </span>
            <span>&</span>
            <span className="relative inline-flex items-center">
              <span className="relative z-10 whitespace-nowrap">SOCIAL</span>
            </span>
            <span className="relative inline-flex items-center">
              <span className="relative z-10 px-2">MEDIA</span>
              <span className="absolute inset-0 border-2 border-[#B1030E]"></span>
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

