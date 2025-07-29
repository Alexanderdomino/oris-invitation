import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'
import './Letter.css'

interface LetterProps {
  isOpen: boolean
  onLetterClick: () => void
}

const Letter: React.FC<LetterProps> = ({ isOpen, onLetterClick }) => {
  const envelopeControls = useAnimation()
  const flapControls = useAnimation()

  useEffect(() => {
    if (isOpen) {
      // Animate envelope opening
      envelopeControls.start({
        scale: 1.1,
        transition: { duration: 0.3 }
      })
      
      // Animate flap opening
      flapControls.start({
        rotateX: -180,
        transition: { duration: 1, delay: 0.3, ease: "easeInOut" }
      })
    }
  }, [isOpen, envelopeControls, flapControls])

  return (
    <div className="letter-wrapper">
      <motion.div
        className="letter-hint"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <p>Du har modtaget en invitation fra <strong>Oris</strong>!</p>
        <p className="click-hint">Klik for at åbne</p>
      </motion.div>

      <motion.div
        className="envelope"
        animate={envelopeControls}
        onClick={!isOpen ? onLetterClick : undefined}
        whileHover={!isOpen ? { scale: 1.05, cursor: 'pointer' } : {}}
        whileTap={!isOpen ? { scale: 0.95 } : {}}
      >
        {/* Envelope body */}
        <div className="envelope-body">
          <div className="envelope-front"></div>
          <div className="envelope-back"></div>
        </div>

        {/* Envelope flap */}
        <motion.div
          className="envelope-flap"
          animate={flapControls}
          style={{ transformOrigin: 'top center', transformStyle: 'preserve-3d' }}
        >
          <div className="flap-inner"></div>
        </motion.div>

        {/* Wax seal */}
        <motion.div
          className="wax-seal"
          initial={{ scale: 1 }}
          animate={isOpen ? { scale: 0, opacity: 0 } : { scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: isOpen ? 0.8 : 0 }}
        >
          🌞
        </motion.div>

        {/* Letter content peeking out */}
        <motion.div
          className="letter-content-peek"
          initial={{ y: 0, opacity: 0 }}
          animate={isOpen ? { y: -50, opacity: 1 } : { y: 0, opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="letter-paper">
            <div className="letter-text-preview">
              Summer Party...
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Floating particles around the letter */}
      <motion.div className="letter-particles">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="particle"
            initial={{ 
              x: Math.random() * 100 - 50,
              y: Math.random() * 100 - 50,
              opacity: 0 
            }}
            animate={{
              x: Math.random() * 200 - 100,
              y: Math.random() * 200 - 100,
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            ✨
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default Letter
