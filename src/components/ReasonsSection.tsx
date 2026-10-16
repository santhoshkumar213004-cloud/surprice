import { useState } from 'react'
import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'
import { birthdayData } from '../data/birthdayData'

export default function ReasonsSection() {
  const [active, setActive] = useState<number | null>(null)
  return (
    <section className="section" id="reasons">
      <div className="section-heading">
        <p className="eyebrow">I could keep going forever</p>
        <h2>Reasons Why I Love You ❤️</h2>
        <p>Tap a card. I&apos;ll give you one more reason.</p>
      </div>
      <div className="reasons-grid">
        {birthdayData.reasons.map((reason, i) => (
          <motion.button key={reason.title} className={`reason-card glass ${active === i ? 'active' : ''}`} onClick={() => setActive(active === i ? null : i)} whileHover={{ y: -7 }} animate={{ rotateY: active === i ? 180 : 0 }}>
            <div className="reason-front"><Heart size={22} fill="currentColor"/><h3>{reason.title}</h3><span>tap to reveal ✨</span></div>
            <div className="reason-back"><span className="reason-number">0{i + 1}</span><p>{reason.message}</p></div>
          </motion.button>
        ))}
      </div>
    </section>
  )
}