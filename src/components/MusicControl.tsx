import { Music, Volume2, VolumeX } from 'lucide-react'

type Props = { playing: boolean; onToggle: () => void }

export default function MusicControl({ playing, onToggle }: Props) {
  return (
    <button className={`music-control ${playing ? 'playing' : ''}`} onClick={onToggle} aria-label={playing ? 'Pause music' : 'Play music'}>
      {playing ? <Volume2 size={18} /> : <VolumeX size={18} />}
      <span>{playing ? 'Music on' : 'Music off'}</span>
      <Music size={15} />
    </button>
  )
}