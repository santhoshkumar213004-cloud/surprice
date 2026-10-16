import { useState } from 'react'
import { motion } from 'framer-motion'
import { Maximize2 } from 'lucide-react'
import { birthdayData, type Memory } from '../data/birthdayData'
import MemoryModal from './MemoryModal'

export default function MemoryGallery() {
  // const [selected, setSelected] = useState<Memory | null>(null)
  // return (
  //   <section className="section" id="memories">
  //     <div className="section-heading">
  //       <p className="eyebrow">The moments I would replay forever</p>
  //       <h2>Our Memories ❤️</h2>
  //       <p>Every photo is a little doorway back to a moment I never want to forget.</p>
  //     </div>
  //     <div className="memory-grid">
  //       {birthdayData.memories.map((memory, i) => (
  //         <motion.button className={`memory-card memory-${i % 3}`} key={memory.title} onClick={() => setSelected(memory)} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ delay: (i % 3) * .08 }} whileHover={{ y: -8, rotate: i % 2 ? 1 : -1 }}>
  //           <img src={memory.image} alt={memory.title} loading="lazy" />
  //           <span className="memory-overlay"><span><small>{memory.date}</small><strong>{memory.title}</strong></span><Maximize2 size={18}/></span>
  //         </motion.button>
  //       ))}
  //     </div>
  //     <MemoryModal memory={selected} onClose={() => setSelected(null)} />
  //   </section>
  // )
}