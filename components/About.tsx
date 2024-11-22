import Image from 'next/image'

export default function About() {
  return (
    <section className="bg-[#FAF6EF] py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Over Morris Section */}
        <div className="mb-20">
          <h2 className="text-6xl font-roboto-mono text-[#B1030E] mb-12">
            Over
            <br />
            morris
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 font-roboto-mono text-[#F24957]">
            <div className="space-y-4">
              <p>
                Morris the Agency is een creatief bureau met een passie voor alles wat mooi en inspirerend is. We vertalen die passie naar krachtige beelden en woorden. Morris is gespecialiseerd in het creëren van content die écht aanspreekt, op een manier die perfect aansluit bij jou en je bedrijf.
              </p>
            </div>
            <div className="space-y-4">
              <p>
                Of het nu gaat om productfotografie, pakkende teksten, sfeervolle lifestylefoto&apos;s of catchy reels om je socials een boost te geven – wij zorgen voor de uitstraling die je merk verdient.
              </p>
            </div>
          </div>
        </div>

        {/* Wiese Deleu Section */}
        <div>
          <div className="relative mb-12">
            <h2 className="text-5xl font-roboto-mono text-[#B1030E]">
              Wiese Deleu
            </h2>
            <div className="absolute -right-8 top-0 animate-spin-slow">
              <Image src="/morris-theagency/assets/pinwheel.svg" alt="Decorative pinwheel" width={40} height={40} />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="relative aspect-square">
              <Image
                src="/morris-theagency/assets/about-landscape.jpg"
                alt="Decorative landscape"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="font-roboto-mono text-[#F24957] space-y-4">
              <p>
                Heb je een idee waar je iets mee wilt doen, of droom je van meer zichtbaarheid, online of offline? Dan help ik je graag verder! Als fotograaf, project manager &amp; social media-lover stort ik me vol passie op elke creatieve uitdaging.
              </p>
              <p>
                Naast mijn werk achter de camera of computer vind je me vaak in de keuken of op restaurant – good food = good life! Daarnaast vind je me vaak in gezellige koffiebars of bijzondere winkels, waar ik droom, geniet en inspiratie opdoe. Dus… zin om eens samen een koffietje te drinken?
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

