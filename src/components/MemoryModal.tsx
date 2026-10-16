import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import type { Memory } from '../data/birthdayData'

type Props = { memory: Memory | null; onClose: () => void }

export default function MemoryModal({ memory, onClose }: Props) {
  return <AnimatePresence>
    {memory && <motion.div className="modal-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
      <motion.div className="memory-modal glass" initial={{ opacity: 0, scale: .9, y: 30 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: .95 }} onClick={e => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose} aria-label="Close"><X /></button>
        <img src={memory.image} alt={memory.title} />
        <div><p className="eyebrow">{memory.date}</p><h3>{memory.title}</h3><p>{memory.caption}</p></div>
      </motion.div>
    </motion.div>}
  </AnimatePresence>
}