import { motion } from 'framer-motion'
import { useCountdown } from '../hooks/useCountdown'

type Props = { target: string }

export default function Countdown({ target }: Props) {
  const c = useCountdown(target)
  const items = [['days', c.days], ['hours', c.hours], ['minutes', c.minutes], ['seconds', c.seconds]] as const
  return (
    <section className="section countdown-section" id="countdown">
      <div className="section-heading">
        <p className="eyebrow">Counting every heartbeat</p>
        <h2>Until Your Special Day</h2>
        <p>The clock is moving, but this little moment is ours.</p>
      </div>
      {c.complete ? (
        <div className="birthday-live">It&apos;s your day! Let the celebration begin. 🎉</div>
      ) : (
        <div className="countdown-grid">
          {items.map(([label, value], i) => (
            <motion.div className="count-card glass" key={label} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .08 }}>
              <motion.div key={value} className="count-number" initial={{ y: -8, opacity: .3 }} animate={{ y: 0, opacity: 1 }}>{String(value).padStart(2, '0')}</motion.div>
              <div className="count-label">{label}</div>
            </motion.div>
          ))}
        </div>
      )}
    </section>
  )
}