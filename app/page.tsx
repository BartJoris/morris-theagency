import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FAF6EF]">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Contact />
      </main>
      <footer className="bg-[#0D0D0D] text-[#FAF6EF] py-4 text-center font-roboto-mono">
        <p>&copy; 2024 Morris The Agency. Alle rechten voorbehouden.</p>
      </footer>
    </div>
  )
}

