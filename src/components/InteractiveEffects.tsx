import { useEffect } from 'react'
import { motion } from 'framer-motion'
import confetti from 'canvas-confetti'
import './InteractiveEffects.css'
import { balloons } from "balloons-js"

interface InteractiveEffectsProps {
  isActive: boolean
}

const InteractiveEffects: React.FC<InteractiveEffectsProps> = ({ isActive }) => {
  // Handle click/touch confetti
  useEffect(() => {
    if (!isActive) return

    const handleClick = (e: MouseEvent | TouchEvent) => {
      const x = 'touches' in e ? e.touches[0].clientX : e.clientX
      const y = 'touches' in e ? e.touches[0].clientY : e.clientY

      // Create confetti at click/touch position
      confetti({
        particleCount: 50,
        spread: 60,
        origin: {
          x: x / window.innerWidth,
          y: y / window.innerHeight
        },
        colors: ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#ffeaa7', '#fd79a8', '#a29bfe']
      })
    }

    // Add both mouse and touch event listeners
    document.addEventListener('click', handleClick)
    document.addEventListener('touchstart', handleClick)

    return () => {
      document.removeEventListener('click', handleClick)
      document.removeEventListener('touchstart', handleClick)
    }
  }, [isActive])

  // Generate periodic balloons using balloons-js library
  useEffect(() => {
    if (!isActive) return

    const generateBalloons = () => {
      // Call balloons() method from balloons-js library
      //balloons()
    }

    // Generate balloons every 30-40 seconds
    const interval = setInterval(generateBalloons, 30000 + Math.random() * 10000)
    
    // Generate initial balloons
    setTimeout(generateBalloons, 5000)

    return () => clearInterval(interval)
  }, [isActive])

  if (!isActive) return null

  return (
    <div className="interactive-effects">
      {/* Balloons are now handled by balloons-js library */}
    </div>
  )
}

export default InteractiveEffects
