export default function Landscape() {
  return (
    <div className="relative w-full aspect-square">
      <div className="absolute inset-0 bg-[#B9E1F6] rounded-lg">
        {/* Sky */}
        <div className="absolute inset-x-0 top-[20%] h-[30%]">
          <div className="absolute left-[20%] top-[20%] bg-white w-16 h-8 rounded-full" /> {/* Cloud */}
        </div>
        {/* Hills */}
        <div className="absolute bottom-0 inset-x-0">
          <div className="absolute bottom-0 inset-x-0 h-[40%] bg-[#90BE6D] rounded-t-full transform translate-y-1/4" />
          <div className="absolute bottom-0 inset-x-0 h-[30%] bg-[#6B9C4F] rounded-t-full transform translate-y-1/3" />
        </div>
        {/* Let's talk button */}
        <div className="absolute bottom-8 right-8">
          <div className="bg-[#F24957] text-white px-6 py-2 rounded-full font-roboto-mono">
            Let&apos;s talk!
          </div>
        </div>
      </div>
    </div>
  )
}

