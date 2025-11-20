import { Smartphone } from 'lucide-react'

export default function CTA() {
  return (
    <section id="download" className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-emerald-400/30 bg-gradient-to-br from-emerald-500/10 via-cyan-500/10 to-transparent p-8 sm:p-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white">Get PAIR (Beta)</h2>
              <p className="mt-3 text-slate-300/80">Be among the first to try AI-powered ridesharing. Join the waitlist and we’ll notify you as we roll out.</p>

              <form className="mt-6 flex flex-col sm:flex-row gap-3">
                <input type="email" placeholder="Enter your email" className="w-full sm:flex-1 rounded-xl bg-slate-900/60 border border-white/10 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/40" />
                <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-400 to-cyan-400 px-5 py-3 font-semibold text-slate-900 shadow-lg shadow-emerald-500/20">
                  <Smartphone size={18} /> Join waitlist
                </button>
              </form>
            </div>

            <div className="relative">
              <div className="aspect-[9/16] rounded-2xl border border-white/10 bg-slate-900/60" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
