import { motion, useAnimation } from 'framer-motion'
import { useEffect, useState } from 'react'
import './BackgroundEffects.css'

interface BackgroundEffectsProps {
  isLetterOpen: boolean
}

const BackgroundEffects: React.FC<BackgroundEffectsProps> = ({ isLetterOpen }) => {
  const [showFireworks, setShowFireworks] = useState(false)
  const fireworksControls = useAnimation()

  useEffect(() => {
    if (isLetterOpen) {
      // Start fireworks after a delay
      const timer = setTimeout(() => {
        setShowFireworks(true)
        fireworksControls.start({
          opacity: 1,
          transition: { duration: 1 }
        })
      }, 2000)

      return () => clearTimeout(timer)
    }
  }, [isLetterOpen, fireworksControls])

  // Generate balloon positions
  const balloons = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 3,
    duration: 8 + Math.random() * 4,
    color: ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#ffeaa7', '#fd79a8', '#a29bfe', '#6c5ce7'][i]
  }))

  const stars = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    top: Math.random() * 100,
    delay: Math.random() * 5,
    duration: 3 + Math.random() * 2
  }))

  return (
    <div className="background-effects">
      {/* Gradient background */}
      <motion.div
        className="gradient-background"
        initial={{ opacity: 0.7 }}
        animate={isLetterOpen ? { opacity: 1 } : { opacity: 0.7 }}
        transition={{ duration: 2 }}
      />

      {/* Floating balloons */}
      <div className="balloons-container">
        {balloons.map((balloon) => (
          <motion.div
            key={balloon.id}
            className="balloon"
            style={{
              left: `${balloon.left}%`,
              backgroundColor: balloon.color,
            }}
            initial={{ y: '100vh', opacity: 0 }}
            animate={isLetterOpen ? {
              y: '-100vh',
              opacity: [0, 1, 1, 0],
              x: [0, 20, -20, 0, 10, -10]
            } : {}}
            transition={{
              duration: balloon.duration,
              delay: balloon.delay,
              ease: 'easeOut',
              repeat: Infinity,
              repeatDelay: 5
            }}
          />
        ))}
      </div>

      {/* Twinkling stars */}
      <div className="stars-container">
        {stars.map((star) => (
          <motion.div
            key={star.id}
            className="star"
            style={{
              left: `${star.left}%`,
              top: `${star.top}%`,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: star.duration,
              delay: star.delay,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          >
            ⭐
          </motion.div>
        ))}
      </div>

      {/* Fireworks effect */}
      {showFireworks && (
        <motion.div
          className="fireworks-container"
          animate={fireworksControls}
          initial={{ opacity: 0 }}
        >
          {Array.from({ length: 6 }, (_, i) => (
            <motion.div
              key={i}
              className="firework"
              style={{
                left: `${20 + Math.random() * 60}%`,
                top: `${20 + Math.random() * 40}%`,
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 1, 0],
                rotate: [0, 360]
              }}
              transition={{
                duration: 2,
                delay: i * 0.5,
                repeat: Infinity,
                repeatDelay: 3,
                ease: 'easeOut'
              }}
            >
              <div className="firework-burst">
                {Array.from({ length: 8 }, (_, j) => (
                  <motion.div
                    key={j}
                    className="firework-particle"
                    style={{
                      transform: `rotate(${j * 45}deg)`
                    }}
                    animate={{
                      scale: [0, 1, 0],
                      opacity: [1, 1, 0]
                    }}
                    transition={{
                      duration: 1.5,
                      delay: i * 0.5,
                      repeat: Infinity,
                      repeatDelay: 3.5
                    }}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}

      {/* Floating hearts */}
      <div className="hearts-container">
        {Array.from({ length: 12 }, (_, i) => (
          <motion.div
            key={i}
            className="floating-heart"
            style={{
              left: `${Math.random() * 100}%`,
            }}
            initial={{ y: '100vh', opacity: 0, scale: 0 }}
            animate={isLetterOpen ? {
              y: '-50vh',
              opacity: [0, 1, 1, 0],
              scale: [0, 1, 1, 0],
              rotate: [0, 360]
            } : {}}
            transition={{
              duration: 6 + Math.random() * 3,
              delay: Math.random() * 4,
              repeat: Infinity,
              repeatDelay: 8,
              ease: 'easeOut'
            }}
          >
            💝
          </motion.div>
        ))}
      </div>

      {/* Rainbow effect */}
      <motion.div
        className="rainbow-overlay"
        initial={{ opacity: 0 }}
        animate={isLetterOpen ? { opacity: 0.3 } : { opacity: 0 }}
        transition={{ duration: 3, delay: 1 }}
      />
    </div>
  )
}

export default BackgroundEffects
