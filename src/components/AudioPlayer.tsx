import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import './AudioPlayer.css'

interface AudioPlayerProps {
  shouldPlay: boolean
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ shouldPlay }) => {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [showControls, setShowControls] = useState(false)

  // Create audio context for party music
  useEffect(() => {
    if (shouldPlay && audioRef.current) {
      // Show controls after letter opens
      const timer = setTimeout(() => {
        setShowControls(true)
        // Auto-play after a delay
        setTimeout(() => {
          playAudio()
        }, 1000)
      }, 2000)

      return () => clearTimeout(timer)
    }
  }, [shouldPlay])

  const playAudio = async () => {
    if (audioRef.current) {
      try {
        await audioRef.current.play()
        setIsPlaying(true)
      } catch (error) {
        console.log('Audio autoplay was prevented:', error)
        // This is normal browser behavior - user needs to interact first
      }
    }
  }

  const pauseAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause()
      setIsPlaying(false)
    }
  }

  const toggleAudio = () => {
    if (isPlaying) {
      pauseAudio()
    } else {
      playAudio()
    }
  }

  return (
    <>
      {/* Hidden audio element - we'll use a placeholder since we can't include actual audio files */}
      <audio
        ref={audioRef}
        loop
        preload="auto"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      >
        {/* Frank Sinatra audio file */}
        <source src="/frank-sinatra.mp3" type="audio/mpeg" />
        <source src="/frank-sinatra.ogg" type="audio/ogg" />
        Your browser does not support the audio element.
      </audio>

      {/* Music controls */}
      {showControls && (
        <motion.div
          className="audio-controls"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="music-note-animation">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="music-note"
                animate={isPlaying ? {
                  y: [-10, -30, -10],
                  opacity: [0.7, 1, 0.7],
                  scale: [0.8, 1.2, 0.8]
                } : {}}
                transition={{
                  duration: 2,
                  delay: i * 0.3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                {['🎵', '🎶', '🎼'][i]}
              </motion.div>
            ))}
          </div>

          <motion.button
            className={`audio-toggle ${isPlaying ? 'playing' : 'paused'}`}
            onClick={toggleAudio}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            title={isPlaying ? 'Pause music' : 'Play party music'}
          >
            <span className="audio-icon">
              {isPlaying ? '⏸️' : '▶️'}
            </span>
            <span className="audio-text">
              {isPlaying ? 'Pause Music' : 'Play Party Music'}
            </span>
          </motion.button>

          <div className="audio-info">
            <p className="now-playing">
              {isPlaying ? '� Frank Sinatra is playing!' : '🎵 Click to start the music!'}
            </p>
            {!isPlaying && (
              <p className="audio-note">
                Classic Frank Sinatra to set the perfect party mood! 🎤
              </p>
            )}
          </div>
        </motion.div>
      )}
    </>
  )
}

export default AudioPlayer
