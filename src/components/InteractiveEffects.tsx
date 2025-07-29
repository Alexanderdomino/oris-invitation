import { useEffect } from 'react'
import confetti from 'canvas-confetti'
import './InteractiveEffects.css'
import { balloons } from "balloons-js"

interface InteractiveEffectsProps {
  isActive: boolean
}

const InteractiveEffects: React.FC<InteractiveEffectsProps> = ({ isActive }) => {
  // Handle click/touch confetti with throttling
  useEffect(() => {
    if (!isActive) return

    let lastConfetti = 0
    const confettiCooldown = 1000 // 1 second cooldown between confetti

    const handleClick = (e: MouseEvent | TouchEvent) => {
      const now = Date.now()
      if (now - lastConfetti < confettiCooldown) return
      
      lastConfetti = now
      const x = 'touches' in e ? e.touches[0].clientX : e.clientX
      const y = 'touches' in e ? e.touches[0].clientY : e.clientY

      // Create lighter confetti at click/touch position
      confetti({
        particleCount: 25, // Reduced from 50
        spread: 45, // Reduced from 60
        origin: {
          x: x / window.innerWidth,
          y: y / window.innerHeight
        },
        colors: ['#ff6b6b', '#4ecdc4', '#45b7d1', '#ffeaa7'] // Reduced colors
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
      balloons()
    }

    // Generate balloons every 45-60 seconds (less frequent for better performance)
    const interval = setInterval(generateBalloons, 45000 + Math.random() * 15000)
    
    // Generate initial balloons after a delay
    setTimeout(generateBalloons, 8000)

    return () => clearInterval(interval)
  }, [isActive])

  if (!isActive) return null

  return (
    <div className="interactive-effects">
      {/* Balloons are handled by balloons-js library */}
    </div>
  )
}

export default InteractiveEffects
