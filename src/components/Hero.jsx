import { motion } from 'framer-motion'
import { Leaf, Sparkles } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28">
      {/* Glow backdrop */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-emerald-500/20 blur-3xl" />
        <div className="absolute top-0 right-0 h-[32rem] w-[32rem] rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white"
            >
              Ride Pair
              <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 to-cyan-300">
                AI-powered ridesharing for a cleaner planet
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="mt-6 text-lg text-slate-300/90 max-w-xl"
            >
              PAIR (Beta) matches riders and drivers smarter, faster, and more sustainably. Reduce traffic and emissions while saving time and money.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <a href="#download" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-emerald-400 to-cyan-400 text-slate-900 font-semibold shadow-lg shadow-emerald-500/20 hover:opacity-90 transition">
                Get the app
              </a>
              <a href="#how" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-white/10 text-white hover:bg-white/5 transition">
                Learn how it works
              </a>
            </motion.div>

            <div className="mt-6 flex items-center gap-3 text-emerald-300/80">
              <Leaf size={18} />
              <p className="text-sm">Incentivizing fewer cars on the road, one pair at a time</p>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <div className="relative mx-auto w-full max-w-md">
              <div className="absolute inset-0 -z-10 rounded-[2.5rem] bg-gradient-to-br from-emerald-400/20 via-cyan-400/10 to-transparent blur-2xl" />
              <div className="rounded-[2rem] border border-white/10 bg-slate-900/60 backdrop-blur shadow-2xl p-4">
                <div className="aspect-[9/19] rounded-[1.5rem] bg-gradient-to-b from-slate-800 to-slate-900 border border-white/10 overflow-hidden">
                  <div className="p-6">
                    <div className="h-2 w-16 rounded-full bg-white/20 mb-4" />
                    <div className="space-y-2">
                      <div className="h-10 rounded-xl bg-emerald-400/20 border border-emerald-400/30" />
                      <div className="h-10 rounded-xl bg-cyan-400/20 border border-cyan-400/30" />
                      <div className="h-10 rounded-xl bg-emerald-400/10 border border-emerald-400/20" />
                    </div>
                    <div className="mt-6 h-40 rounded-xl bg-[radial-gradient(circle_at_70%_30%,rgba(16,185,129,0.25),transparent_60%)] border border-white/10" />
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -right-4 -top-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-4 py-2 text-white">
                <Sparkles size={16} className="text-emerald-300" />
                <span className="text-sm">AI matching</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
