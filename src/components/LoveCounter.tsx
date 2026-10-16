import { motion } from 'framer-motion'
import { birthdayData } from '../data/birthdayData'

export default function LoveCounter() {
  // const start = new Date(birthdayData.relationshipStartDate).getTime()
  // const days = Math.max(0, Math.floor((Date.now() - start) / 86400000))
  return (
    <section className="section counter-section">
      {/* <div className="counter-card glass">
        <p className="eyebrow">And every day still counts</p>
        <h2>Every Moment With You Matters ❤️</h2>
        <motion.div className="love-counter" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          <strong>{days.toLocaleString()}</strong><span>days of memories & counting</span>
        </motion.div>
        <p className="small-note">Change <code>relationshipStartDate</code> in <code>src/data/birthdayData.ts</code> to personalize this.</p>
      </div> */}
    </section>
  )
}