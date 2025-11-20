import { MapPin, Users, Sparkles, Shield, Coins } from 'lucide-react'

const features = [
  {
    icon: Sparkles,
    title: 'AI Pairing',
    desc: 'Smartly matches nearby riders and drivers with similar routes and schedules.'
  },
  {
    icon: MapPin,
    title: 'Route Optimization',
    desc: 'Real-time routing to reduce detours and get you there faster with fewer miles.'
  },
  {
    icon: Users,
    title: 'Community-first',
    desc: 'Trusted network with ratings, verified profiles, and shared preferences.'
  },
  {
    icon: Shield,
    title: 'Safety Built-in',
    desc: 'Live trip sharing, emergency contacts, and privacy-first design.'
  },
  {
    icon: Coins,
    title: 'Earn and Save',
    desc: 'Drivers earn rewards, riders save on trips — everyone wins.'
  }
]

export default function Features() {
  return (
    <section id="features" className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Why Ride Pair?</h2>
          <p className="mt-4 text-slate-300/80">Designed to reduce traffic and emissions while making ridesharing convenient and rewarding.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 shadow-lg">
              <div className="h-10 w-10 grid place-items-center rounded-lg bg-gradient-to-br from-emerald-400/30 to-cyan-400/30 text-emerald-200">
                <f.icon size={20} />
              </div>
              <h3 className="mt-4 text-white font-semibold">{f.title}</h3>
              <p className="mt-2 text-slate-300/80 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
