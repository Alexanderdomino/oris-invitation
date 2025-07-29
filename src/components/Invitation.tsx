import { motion } from 'framer-motion'
import { useEffect } from 'react'
import confetti from 'canvas-confetti'
import './Invitation.css'

const Invitation: React.FC = () => {
  useEffect(() => {
    // Trigger confetti when invitation appears
    const timer = setTimeout(() => {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      })
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.25, 0.25, 0.75] as const
      }
    }
  }

  return (
    <motion.div
      className="invitation-wrapper"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="invitation-paper">
        {/* Decorative header */}
        <motion.div
          className="invitation-header"
          variants={itemVariants}
        >
          <div className="header-decoration">🌞🌺🌞</div>
        </motion.div>

        {/* Main title */}
        <motion.h1
          className="invitation-title"
          variants={itemVariants}
        >
          KÆMPE SOMMERFEST
        </motion.h1>

        {/* Decorative divider */}
        <motion.div
          className="divider"
          variants={itemVariants}
        >
          ✨ ☀️ ✨
        </motion.div>

        {/* Main message */}
        <motion.div
          className="invitation-message"
          variants={itemVariants}
        >
          <p>Du er hjerteligt inviteret til at deltage i en uforglemmelig</p>
          <h2>SOMMERFEST!</h2>
          <p>Lad os gøre denne sommer mindeværdig med fantastisk musik, lækker mad, forfriskende drikkevarer og fantastiske damer!</p>
        </motion.div>

        {/* Event details */}
        <motion.div
          className="event-details"
          variants={itemVariants}
        >
          <div className="detail-item">
            <span className="detail-icon">📅</span>
            <span className="detail-text">
              <strong>Dato:</strong> Lørdag den 15. august 2025
            </span>
          </div>
          
          <div className="detail-item">
            <span className="detail-icon">⏰</span>
            <span className="detail-text">
              <strong>Tidspunkt:</strong> 4:00 PM - Sent på natten wuhuu!
            </span>
          </div>
          
          <div className="detail-item">
            <span className="detail-icon">📍</span>
            <span className="detail-text">
              <strong>Sted:</strong> Hammel festlokale
              <br />
              <span className="address">Festvej 10, Hammel</span>
            </span>
          </div>
        </motion.div>

        {/* Activities */}
        <motion.div
          className="activities-section"
          variants={itemVariants}
        >
          <h3>Hvad du kan forvente:</h3>
          <div className="activities-grid">
            <div className="activity-item">🎵 Live DJ Jose</div>
            <div className="activity-item">🍔 Den lækreste mad</div>
            <div className="activity-item">🍹 Cocktails og drinks</div>
            <div className="activity-item">🏊 Svingning af træbenet</div>
            <div className="activity-item">🎯 Stoleleg</div>
            <div className="activity-item">💃 Lækre Oris damer</div>
          </div>
        </motion.div>

        {/* Dress code */}
        <motion.div
          className="dress-code"
          variants={itemVariants}
        >
          <p><strong>Dress Code:</strong> Sommer tøj - På med dansestøvlerne! 🌈</p>
        </motion.div>

        {/* RSVP */}
        <motion.div
          className="rsvp-section"
          variants={itemVariants}
        >
          <p>Ved spørgsmål, kontakt venligst:</p>
          <div className="contact-info">
            <p>📧 josefine@sommerfest.com or Regitze@sommerfest.com</p>
            <p>📱 (+45) 23 82 68 86</p>
          </div>
        </motion.div>

        {/* Footer decoration */}
        <motion.div
          className="invitation-footer"
          variants={itemVariants}
        >
          <div className="footer-decoration">🎉 🌺 🎉</div>
          <p className="signature">Vi glæder os til at fejre med dig!</p>
        </motion.div>

        {/* Floating decorative elements */}
        <div className="floating-decorations">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="floating-element"
              initial={{ 
                x: Math.random() * 100,
                y: Math.random() * 100,
                rotate: 0
              }}
              animate={{
                x: Math.random() * 200,
                y: Math.random() * 200,
                rotate: 360,
              }}
              transition={{
                duration: 8 + Math.random() * 4,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              {['🌺', '🌞', '🎈', '🦋', '🌸', '⭐'][i]}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default Invitation
