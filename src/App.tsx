import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowDown, Heart } from 'lucide-react'
import IntroScreen from './components/IntroScreen'
import ParticleBackground from './components/ParticleBackground'
import FloatingHearts from './components/FloatingHearts'
import ScrollProgress from './components/ScrollProgress'
import MusicControl from './components/MusicControl'
import Countdown from './components/Countdown'
import HeroSection from './components/HeroSection'
import BirthdayReveal from './components/BirthdayReveal'
import MemoryGallery from './components/MemoryGallery'
import LoveTimeline from './components/LoveTimeline'
import LoveLetter from './components/LoveLetter'
import ReasonsSection from './components/ReasonsSection'
import LoveCounter from './components/LoveCounter'
import SecretSurprise from './components/SecretSurprise'
import FinalSurprise from './components/FinalSurprise'
import { birthdayData } from './data/birthdayData'
import { useAudio } from './hooks/useAudio'

export default function App() {
  const [intro, setIntro] = useState(true)
  const { playing, toggle } = useAudio('/audio/romantic.mp3')

  return (
    <>
      <AnimatePresence>{intro && <IntroScreen onOpen={() => setIntro(false)} />}</AnimatePresence>
      {!intro && (
        <motion.div className="app-shell" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          <ParticleBackground />
          <FloatingHearts />
          <ScrollProgress />
          <MusicControl playing={playing} onToggle={toggle} />
          <main>
            <HeroSection />
            <Countdown target={birthdayData.birthdayDate} />
            <BirthdayReveal />
            <MemoryGallery />
            <LoveTimeline />
            <LoveLetter />
            <ReasonsSection />
            <LoveCounter />
            <SecretSurprise />
            <section className="breath-section">
              <div className="breath-orb"><Heart fill="currentColor"/></div>
              <p>Keep scrolling… there is one last thing I want you to see. ❤️</p>
              <ArrowDown className="bounce" />
            </section>
            <FinalSurprise />
          </main>
          <footer><span>Made with love, for one very special person.</span> <Heart size={14} fill="currentColor"/></footer>
        </motion.div>
      )}
    </>
  )
}