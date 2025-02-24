import React from 'react';

interface ReviewProps {
  quote?: string;
  body?: string;
  author?: string;
  position?: string;
  image?: string;
}

export default function Review({
  quote = "Wij blikken terug op een superfijne samenwerking met Morris The Agency voor de fotoshoot van onze nieuwe collectie.",
  body = `Voorafgaand aan de shoot was er een nauw en vlot contact over de look'n feel van de shoot. Er werd samen gezocht naar de juiste props, de juiste sfeer, … alles was tot in detail voorbereid op het moment van de shoot. De opname zelf verliep heel aangename doch superprofessionele sfeer. Ook de communicatie bij de verwerking van de foto's verliep vlot. Vijf sterren dus!`,
  author = "Charlotte Therssen",
  position = "Zaakvoerder Wohla",
  image = '/assets/charlotte.png'
}: ReviewProps): JSX.Element {
  return (
    <section className="py-20 px-6 bg-[#FAF6EF]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-roboto-mono text-[#B1030E] mb-8">
          Wat onze klanten zeggen
        </h2>
        
        <div className="flex flex-col md:flex-row gap-16 items-center relative">
          <div className="w-full md:w-1/5 relative">
            <img 
              src={image} 
              alt={author} 
              className="w-full grayscale"
            />
            <img 
              src="/assets/quote.png" 
              alt="quote" 
              className="absolute -left-20 bottom-0 w-40 opacity-20"
            />
          </div>
          
          <div className="w-full md:w-1/2">
            <div className="space-y-8">
              <p className="text-[#B1030E] text-2xl italic font-medium">{quote}</p>
              <p 
                className="text-[#B1030E] text-lg"
                dangerouslySetInnerHTML={{ 
                  __html: body.replace(/(nauw|vlot contact|detail voorbereid|aangename|superprofessionele|Vijf sterren)/g, 
                    '<span class="font-bold text-[#B1030E]">$1</span>') 
                }} 
              />
              <div className="mt-8">
                <p className="font-bold text-[#B1030E]">- {author},</p>
                <p className="text-[#B1030E]">{position}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 