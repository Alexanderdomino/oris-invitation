import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import './LoadingScreen.css'

interface LoadingScreenProps {
  onLoadingComplete: () => void
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadingComplete }) => {
  const [loadingText, setLoadingText] = useState('Klargør invitation...')

  useEffect(() => {
    const messages = [
      'Klargør invitation...',
      'tilføjer glimmer ✨',
      'Puster balloner 🎈',
      'Sætter fyrværkeri op 🎆',
      'Næsten klar! 🎉'
    ]

    let messageIndex = 0
    const interval = setInterval(() => {
      messageIndex = (messageIndex + 1) % messages.length
      setLoadingText(messages[messageIndex])
    }, 800)

    // Complete loading after 4 seconds
    const timer = setTimeout(() => {
      onLoadingComplete()
    }, 4000)

    return () => {
      clearInterval(interval)
      clearTimeout(timer)
    }
  }, [onLoadingComplete])

  return (
    <motion.div
      className="loading-screen"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="loading-content">
        <motion.div
          className="loading-envelope"
          animate={{
            rotateY: [0, 180, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          💌
        </motion.div>

        <motion.h2
          className="loading-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Summer Party Invitation
        </motion.h2>

        <motion.p
          className="loading-text"
          key={loadingText}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {loadingText}
        </motion.p>

        <div className="loading-bar">
          <motion.div
            className="loading-progress"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 4, ease: "easeOut" }}
          />
        </div>

        <motion.div
          className="loading-sparkles"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {[...Array(8)].map((_, i) => (
            <motion.span
              key={i}
              className="sparkle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
                rotate: [0, 180, 360]
              }}
              transition={{
                duration: 2,
                delay: Math.random() * 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              ✨
            </motion.span>
          ))}
        </motion.div>
      </div>
    </motion.div>
  )
}

export default LoadingScreen
