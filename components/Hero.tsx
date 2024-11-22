import Image from 'next/image'

export default function Hero() {
  return (
    <section className="bg-[#FAF6EF] py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Logo Section */}
        <div className="relative flex flex-col items-center mb-16">
          <h1 className="text-7xl md:text-8xl font-vibes text-[#B1030E] tracking-wider">
            morris
          </h1>
          <p className="text-[#B9E1F6] font-roboto-mono text-2xl tracking-[0.2em]">
            THE AGENCY
          </p>
          <div className="absolute top-0 right-0 md:right-20 animate-spin-slow">
            <Image src="/morris-theagency/assets/pinwheel.svg" alt="Decorative pinwheel" width={40} height={40} />
          </div>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
          {[
            '/morris-theagency/assets/hero-image-1.jpg',
            '/morris-theagency/assets/hero-image-2.jpg',
            '/morris-theagency/assets/hero-image-3.jpg'
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
          <p className="text-2xl md:text-3xl tracking-wider flex flex-wrap justify-center gap-x-2">
            <span>GESPECIALISEERD IN</span>
            <span className="relative inline-flex items-center">
              <span className="relative z-10 px-2">FOTOGRAFIE</span>
              <span className="absolute inset-0 border-2 border-[#B1030E] rounded-full"></span>
            </span>
            <span>&</span>
            <span className="relative">
              <span className="relative z-10">SOCIAL</span>
              <span className="absolute bottom-0 left-0 w-full border-b-4 border-[#B1030E]"></span>
              <span className="absolute bottom-[6px] left-0 w-full border-b-4 border-[#B1030E]"></span>
            </span>
            <span className="relative inline-flex items-center">
              <span className="relative z-10 px-2">MEDIA</span>
              <span className="absolute inset-0 border-2 border-[#B1030E]"></span>
            </span>
          </p>
        </div>
      </div>
    </section>
  )
}

