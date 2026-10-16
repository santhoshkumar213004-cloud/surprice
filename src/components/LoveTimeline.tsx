import { motion } from 'framer-motion'
import { birthdayData } from '../data/birthdayData'

export default function LoveTimeline() {
  return (
    <section className="section timeline-section" id="story">
      <div className="section-heading">
        <p className="eyebrow">A story I would choose again</p>
        <h2>Our Story ❤️</h2>
      </div>
      <div className="timeline">
        {birthdayData.timeline.map((item, i) => (
          <motion.article className={`timeline-item ${i % 2 ? 'right' : 'left'}`} key={item.title} initial={{ opacity: 0, x: i % 2 ? 35 : -35 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-80px' }}>
            <div className="timeline-dot">{item.icon}</div>
            <div className="timeline-card glass">
              {item.image && <img src={item.image} alt="" loading="lazy" />}
              <div><p className="eyebrow">{item.date}</p><h3>{item.title}</h3><p>{item.description}</p></div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}