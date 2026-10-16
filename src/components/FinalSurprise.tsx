import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Heart, Sparkles } from 'lucide-react'
import { birthdayData } from '../data/birthdayData'

export default function FinalSurprise() {
  const [fire, setFire] = useState(false)
  useEffect(() => {
    const id = window.setTimeout(() => setFire(true), 900)
    return () => window.clearTimeout(id)
  }, [])
  return (
    <section className="final-section">
      <div className="final-light" />
      <div className="final-stars" aria-hidden="true">
        {Array.from({length: 90}, (_, i) => <i key={i} style={{ left: `${(i * 37) % 100}%`, top: `${(i * 61) % 100}%`, animationDelay: `${(i % 10) * .15}s` }} />)}
      </div>
      <div className="final-hearts" aria-hidden="true">{Array.from({length: 18}, (_, i) => <motion.span key={i} initial={{ y: 40, opacity: 0 }} animate={{ y: -240 - i*8, opacity: [0, .7, 0] }} transition={{ duration: 5 + i*.12, delay: i*.16, repeat: Infinity }}>♥</motion.span>)}</div>
      {fire && <div className="fireworks" aria-hidden="true">{[0,1,2,3].map(i => <motion.div className="firework" key={i} style={{left:`${18+i*22}%`, top:`${24+(i%2)*17}%`}} initial={{scale:0,opacity:1}} animate={{scale:1.7,opacity:0}} transition={{duration:1.6,delay:i*.4,repeat:Infinity,repeatDelay:2.5}} />)}</div>}
      <motion.div className="final-content" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
        <Sparkles className="final-sparkle" />
        <motion.p initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: .3 }} viewport={{ once: true }} className="final-title">{birthdayData.finalMessage.title}</motion.p>
        <motion.h2 initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 1 }} viewport={{ once: true }}>{birthdayData.finalMessage.message}</motion.h2>
        <motion.div initial={{ opacity: 0, scale: .8 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: 1.8, type: 'spring' }} viewport={{ once: true }} className="forever"><Heart fill="currentColor" />{birthdayData.finalMessage.ending}<Heart fill="currentColor" /></motion.div>
      </motion.div>
    </section>
  )
}