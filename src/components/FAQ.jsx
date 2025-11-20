import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

const items = [
  {
    q: 'How does AI pairing work?',
    a: 'We analyze routes, timing, historical reliability, and trust signals to match riders and drivers that best align, reducing detours and wait times.'
  },
  {
    q: 'Is Ride Pair safe?',
    a: 'Yes. We use verified profiles, live trip sharing, community ratings, and privacy-first controls. You decide when to share and with whom.'
  },
  {
    q: 'Do I need to deviate from my route?',
    a: 'Pairing prioritizes minimal detours. Our optimizer adjusts in real time to keep your trip efficient while maximizing shared miles.'
  },
  {
    q: 'What does it cost?',
    a: 'Riders typically pay less than traditional rides. Drivers earn rewards for shared miles. Pricing is transparent before you confirm.'
  }
]

function QA({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="rounded-xl border border-white/10 bg-slate-900/60 p-4">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between text-left">
        <span className="font-medium text-white">{q}</span>
        <ChevronDown className={`transition-transform ${open ? 'rotate-180' : ''}`} size={18} />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.p
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden text-slate-300/80 pt-2"
          >
            {a}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  return (
    <section id="faq" className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">FAQ</h2>
          <p className="mt-4 text-slate-300/80">Answers to the most common questions.</p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {items.map((it) => (
            <QA key={it.q} q={it.q} a={it.a} />
          ))}
        </div>
      </div>
    </section>
  )
}
