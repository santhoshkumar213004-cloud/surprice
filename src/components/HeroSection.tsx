import { motion } from 'framer-motion'
import { Heart, Sparkles } from 'lucide-react'
import { birthdayData } from '../data/birthdayData'

export default function HeroSection() {
  return (
    <section className="hero section">
      <div className="hero-copy">
        <motion.p className="eyebrow" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>{birthdayData.hero.kicker}</motion.p>
        <motion.h1 initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .8 }}>
          {birthdayData.hero.title}
        </motion.h1>
        <motion.p className="hero-subtitle" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: .25 }}>{birthdayData.hero.subtitle}</motion.p>
        <div className="hero-badges"><span><Sparkles size={15}/> made with love</span><span><Heart size={15} fill="currentColor"/> just for you</span></div>
      </div>
      <motion.div className="hero-heart-wrap" whileHover={{ scale: 1.04 }}>
        <div className="heart-halo" />
        <motion.div className="hero-heart" animate={{ scale: [1, 1.06, 1], rotate: [-2, 2, -2] }} transition={{ duration: 2.4, repeat: Infinity }}>
          <Heart fill="currentColor" />
        </motion.div>
        <span className="orbit-dot dot-one" /><span className="orbit-dot dot-two" /><span className="orbit-dot dot-three" />
      </motion.div>
    </section>
  )
}