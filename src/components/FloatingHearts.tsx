import { motion } from 'framer-motion'

const hearts = Array.from({ length: 13 }, (_, i) => i)

export default function FloatingHearts() {
  return (
    <div className="floating-hearts" aria-hidden="true">
      {hearts.map(i => (
        <motion.span key={i} initial={{ y: '105vh', opacity: 0, x: `${(i * 83) % 100}vw`, scale: .5 }} animate={{ y: '-15vh', opacity: [0, .65, .45, 0], x: [`${(i * 83) % 100}vw`, `${((i * 83) + 7) % 100}vw`] }} transition={{ duration: 12 + (i % 5) * 2, delay: i * .7, repeat: Infinity, ease: 'linear' }}>♥</motion.span>
      ))}
    </div>
  )
}