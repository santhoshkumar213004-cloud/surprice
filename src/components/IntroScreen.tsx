import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'

type Props = { onOpen: () => void }

export default function IntroScreen({ onOpen }: Props) {
  return (
    <motion.div className="intro-screen" initial={{ opacity: 1 }} exit={{ opacity: 0, scale: 1.04, filter: 'blur(12px)' }} transition={{ duration: 1.1 }}>
      <div className="intro-orbit orbit-a" />
      <div className="intro-orbit orbit-b" />
      <motion.div className="intro-heart" animate={{ scale: [1, 1.08, 1], rotate: [-3, 3, -3] }} transition={{ duration: 2.2, repeat: Infinity }}>
        <Heart fill="currentColor" size={34} />
      </motion.div>
      <motion.p className="eyebrow" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .35 }}>
        A little secret, made just for you
      </motion.p>
      <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .55, duration: .8 }}>
        Something Special<br /><span>Is Waiting For You ❤️</span>
      </motion.h1>
      <motion.button className="primary-btn" onClick={onOpen} whileHover={{ scale: 1.04 }} whileTap={{ scale: .97 }} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .9 }}>
        Open Your Surprise 💝
      </motion.button>
      <p className="intro-hint">Take your time. There is no rush. ✨</p>
    </motion.div>
  )
}