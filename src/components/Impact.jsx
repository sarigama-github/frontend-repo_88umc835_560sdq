import { Leaf, Globe2, Footprints } from 'lucide-react'

export default function Impact() {
  return (
    <section id="impact" className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Make a measurable impact</h2>
            <p className="mt-4 text-slate-300/80">Every shared ride reduces congestion and carbon emissions. Track your personal contribution in the app.</p>

            <div className="mt-8 grid sm:grid-cols-2 gap-6">
              <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-6">
                <div className="h-10 w-10 grid place-items-center rounded-lg bg-emerald-400/20 text-emerald-200 border border-emerald-400/30">
                  <Leaf size={20} />
                </div>
                <p className="mt-3 text-slate-300/80 text-sm">Lower your footprint with every trip</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-6">
                <div className="h-10 w-10 grid place-items-center rounded-lg bg-emerald-400/20 text-emerald-200 border border-emerald-400/30">
                  <Globe2 size={20} />
                </div>
                <p className="mt-3 text-slate-300/80 text-sm">Help cities reduce traffic and pollution</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl border border-white/10 bg-gradient-to-b from-slate-800 to-slate-900 p-6">
              <div className="h-full rounded-xl border border-white/10 bg-[radial-gradient(circle_at_70%_30%,rgba(16,185,129,0.25),transparent_60%)]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
