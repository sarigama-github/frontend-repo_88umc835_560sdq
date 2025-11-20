import { Car, MapPin, Users, Gift } from 'lucide-react'

const steps = [
  {
    icon: Users,
    title: 'Create your profile',
    desc: 'Set preferences, verify your account, and join a trusted community.'
  },
  {
    icon: MapPin,
    title: 'Set your route',
    desc: 'Enter your origin, destination, and schedule to find the best match.'
  },
  {
    icon: Car,
    title: 'Get paired instantly',
    desc: 'Our AI suggests optimal pairings that fit your route and preferences.'
  },
  {
    icon: Gift,
    title: 'Earn rewards',
    desc: 'Reduce costs and collect eco-points by sharing rides regularly.'
  }
]

export default function HowItWorks() {
  return (
    <section id="how" className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">How it works</h2>
            <p className="mt-4 text-slate-300/80">Getting started takes just a minute. Then let PAIR do the heavy lifting.</p>

            <div className="mt-8 space-y-5">
              {steps.map((s) => (
                <div key={s.title} className="flex gap-4">
                  <div className="h-10 w-10 grid place-items-center rounded-lg bg-emerald-400/20 text-emerald-200 border border-emerald-400/30">
                    <s.icon size={20} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">{s.title}</h3>
                    <p className="text-slate-300/80 text-sm">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-video rounded-2xl border border-white/10 bg-[radial-gradient(circle_at_70%_30%,rgba(16,185,129,0.25),transparent_60%)]"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
