import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

function Tilt3D({ children, className }) {
  const ref = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rx = useSpring(useTransform(y, [0, 1], [12, -12]), { stiffness: 150, damping: 20 })
  const ry = useSpring(useTransform(x, [0, 1], [-18, 18]), { stiffness: 150, damping: 20 })
  const s = useSpring(1, { stiffness: 150, damping: 20 })

  const handleMouseMove = (e) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width
    const py = (e.clientY - rect.top) / rect.height
    x.set(px)
    y.set(py)
  }

  const handleMouseLeave = () => {
    x.set(0.5)
    y.set(0.5)
    s.set(1)
  }

  const handleMouseEnter = () => {
    s.set(1.02)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      style={{
        transformStyle: 'preserve-3d',
        perspective: 1200,
        rotateX: rx,
        rotateY: ry,
        scale: s,
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default function DeviceShowcase() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-24">
      {/* Decorative animated grid */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 opacity-[0.15] [mask-image:radial-gradient(60%_60%_at_50%_40%,black,transparent)]">
          <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse">
                <path d="M 32 0 L 0 0 0 32" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-emerald-300/30" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        <div className="absolute -top-24 -left-24 h-64 w-64 rounded-full bg-emerald-500/25 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-cyan-500/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl font-extrabold tracking-tight"
            >
              Built for every screen
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="mt-4 text-slate-300/90 max-w-xl"
            >
              Experience Ride Pair with delightful 3D visuals. The interface shines on iPhone and laptop with smooth motion, depth, and subtle parallax.
            </motion.p>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 -z-10 rounded-3xl bg-gradient-to-r from-emerald-400/20 via-cyan-400/10 to-transparent blur-2xl" />

            <Tilt3D className="relative mx-auto max-w-lg">
              {/* MacBook */}
              <motion.div
                initial={{ opacity: 0, y: 24, rotateX: -8, rotateY: -8 }}
                whileInView={{ opacity: 1, y: 0, rotateX: -6, rotateY: -8 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ type: 'spring', stiffness: 120, damping: 18 }}
                className="relative mb-10"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="relative mx-auto w-[520px] max-w-full" style={{ transform: 'translateZ(40px)' }}>
                  <div className="aspect-[16/10] rounded-xl border border-white/15 bg-slate-900/70 shadow-2xl overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(60%_100%_at_50%_0%,rgba(59,130,246,0.15),transparent_60%)]" />
                    <img src="/devices/macbook.svg" alt="MacBook mockup" className="pointer-events-none select-none w-full h-full object-cover opacity-90" />
                    <div className="absolute inset-0 bg-gradient-to-tr from-emerald-300/10 via-transparent to-cyan-300/10 mix-blend-screen" />
                  </div>
                  <div className="mx-auto -mt-[6px] h-3 w-[88%] rounded-b-xl bg-gradient-to-b from-slate-700/80 to-slate-800/80 border-x border-b border-white/10" />
                </div>
                {/* Floating badges */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: [0, -6, 0] }}
                  transition={{ delay: 0.5, duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -right-2 -top-2"
                  style={{ transform: 'translateZ(80px)' }}
                >
                  <div className="rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs text-white shadow">
                    Real-time pairing
                  </div>
                </motion.div>
              </motion.div>

              {/* iPhone */}
              <motion.div
                initial={{ opacity: 0, y: 24, rotateX: 8, rotateY: 12 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 8, rotateY: 14 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ type: 'spring', stiffness: 120, damping: 18 }}
                className="relative"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="relative ml-auto w-[260px] max-w-[50vw]" style={{ transform: 'translateZ(60px)' }}>
                  <div className="aspect-[9/19] rounded-[2rem] border border-white/15 bg-slate-900/70 shadow-2xl overflow-hidden">
                    <img src="/devices/iphone.svg" alt="iPhone mockup" className="pointer-events-none select-none w-full h-full object-cover opacity-95" />
                    <div className="absolute inset-0 bg-[radial-gradient(40%_60%_at_70%_30%,rgba(16,185,129,0.35),transparent_60%)]" />
                    <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent mix-blend-overlay" />
                  </div>
                </div>

                {/* Sparkle */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 2.4, repeat: Infinity }}
                  className="pointer-events-none absolute -left-6 top-8 h-24 w-24 rounded-full bg-emerald-400/20 blur-2xl"
                  style={{ transform: 'translateZ(100px)' }}
                />
              </motion.div>
            </Tilt3D>
          </div>
        </div>
      </div>
    </section>
  )
}
