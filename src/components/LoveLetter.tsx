import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail } from 'lucide-react'
import { birthdayData } from '../data/birthdayData'

export default function LoveLetter() {
  const [open, setOpen] = useState(false)
  const [typed, setTyped] = useState('')
  useEffect(() => {
    if (!open) { setTyped(''); return }
    const text = birthdayData.loveLetter.content
    let i = 0
    const id = window.setInterval(() => {
      i += 1
      setTyped(text.slice(0, i))
      if (i >= text.length) window.clearInterval(id)
    }, 18)
    return () => window.clearInterval(id)
  }, [open])
  return (
    <section className="section letter-section" id="letter">
      <div className="section-heading">
        <p className="eyebrow">There are some things I want you to know</p>
        <h2>A Letter For You 💌</h2>
      </div>
      <AnimatePresence mode="wait">
        {!open ? (
          <motion.button key="env" className="envelope glass" onClick={() => setOpen(true)} initial={{ opacity: 0, scale: .94 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} whileHover={{ y: -8 }}>
            <div className="envelope-flap" /><Mail size={54}/><strong>Open my heart</strong><span>Tap the envelope</span>
          </motion.button>
        ) : (
          <motion.div key="letter" className="letter-paper" initial={{ opacity: 0, y: 35, scale: .96 }} animate={{ opacity: 1, y: 0, scale: 1 }}>
            <button className="letter-close" onClick={() => setOpen(false)}>Close letter</button>
            <p className="letter-title">{birthdayData.loveLetter.title}</p>
            <div className="typed-letter">{typed}<span className="caret" /></div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}