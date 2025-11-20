import { useState } from 'react'
import { Menu, X, Leaf, MapPin, Smartphone, Info, Star } from 'lucide-react'

const NavLink = ({ href, children }) => (
  <a href={href} className="text-slate-200/80 hover:text-white transition-colors">
    {children}
  </a>
)

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between rounded-xl mt-4 px-4 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 border border-white/10 shadow-lg">
          <a href="#" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-emerald-400 to-cyan-400 grid place-items-center text-slate-900">
              <Leaf size={18} />
            </div>
            <span className="font-semibold text-white tracking-tight">Ride Pair</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm">
            <NavLink href="#features">Features</NavLink>
            <NavLink href="#how">How it works</NavLink>
            <NavLink href="#impact">Impact</NavLink>
            <NavLink href="#faq">FAQ</NavLink>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="#download" className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-lg border border-emerald-400/40 text-emerald-300 hover:bg-emerald-400/10 transition-colors">
              <Smartphone size={16} /> Get the app
            </a>
          </div>

          <button onClick={() => setOpen(!open)} className="md:hidden text-white p-2">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 md:hidden">
          <div className="mt-2 rounded-xl border border-white/10 bg-slate-900/80 backdrop-blur p-4 space-y-3">
            <a onClick={() => setOpen(false)} href="#features" className="block text-slate-200/80">Features</a>
            <a onClick={() => setOpen(false)} href="#how" className="block text-slate-200/80">How it works</a>
            <a onClick={() => setOpen(false)} href="#impact" className="block text-slate-200/80">Impact</a>
            <a onClick={() => setOpen(false)} href="#faq" className="block text-slate-200/80">FAQ</a>
            <a onClick={() => setOpen(false)} href="#download" className="block text-emerald-300">Get the app</a>
          </div>
        </div>
      )}
    </header>
  )
}
