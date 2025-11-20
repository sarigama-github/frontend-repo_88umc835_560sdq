import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import Impact from './components/Impact'
import DeviceShowcase from './components/DeviceShowcase'
import FAQ from './components/FAQ'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <Navbar />
      <main>
        <Hero />
        <DeviceShowcase />
        <Features />
        <HowItWorks />
        <Impact />
        <FAQ />
        <CTA />
      </main>
      <footer className="border-t border-white/10 py-10 mt-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-400">© {new Date().getFullYear()} Ride Pair. All rights reserved.</p>
          <div className="text-sm text-slate-400">Built with sustainability in mind.</div>
        </div>
      </footer>
    </div>
  )
}

export default App
