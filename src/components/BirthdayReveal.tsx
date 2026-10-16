import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { PartyPopper } from 'lucide-react'

export default function BirthdayReveal() {
  const [celebrate, setCelebrate] = useState(false)
  return (
    <section className="section reveal-section">
      <div className="reveal-card glass">
        <div className="mini-glow" />
        <p className="eyebrow">A moment worth celebrating</p>
        <h2>Happy Birthday,<br /><span>My Love ❤️</span></h2>
        <p>May this year give you countless reasons to smile — and may I be there for as many of them as possible.</p>
        <button className="secondary-btn" onClick={() => setCelebrate(true)}><PartyPopper size={18}/> Make A Wish</button>
        <AnimatePresence>
          {celebrate && <div className="celebration-burst" aria-hidden="true">
            {Array.from({length: 24}, (_, i) => <motion.i key={i} initial={{ x:0, y:0, opacity:1, scale:.4 }} animate={{ x: Math.cos(i/24*Math.PI*2)*180, y: Math.sin(i/24*Math.PI*2)*180, opacity:0, scale:1.3 }} transition={{ duration:1.3 }} />)}
          </div>}
        </AnimatePresence>
      </div>
    </section>
  )
}