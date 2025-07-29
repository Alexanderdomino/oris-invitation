import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import LoadingScreen from './components/LoadingScreen'
import Letter from './components/Letter'
import Invitation from './components/Invitation'
import BackgroundEffects from './components/BackgroundEffects'
import InteractiveEffects from './components/InteractiveEffects'
import AudioPlayer from './components/AudioPlayer'
import './App.css'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [isLetterOpen, setIsLetterOpen] = useState(false)
  const [showInvitation, setShowInvitation] = useState(false)

  const handleLoadingComplete = () => {
    setIsLoading(false)
  }

  const handleLetterClick = () => {
    setIsLetterOpen(true)
    // Delay showing the invitation to allow letter opening animation
    setTimeout(() => {
      setShowInvitation(true)
    }, 1500)
  }

  return (
    <div className="app">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingScreen 
            key="loading"
            onLoadingComplete={handleLoadingComplete} 
          />
        ) : (
          <motion.div
            key="main-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <BackgroundEffects isLetterOpen={isLetterOpen} />
            <InteractiveEffects isActive={!isLoading} />
            
            <AnimatePresence mode="wait">
              {!showInvitation ? (
                <motion.div
                  key="letter-container"
                  className="letter-container"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.8 }}
                >
                  <Letter 
                    isOpen={isLetterOpen} 
                    onLetterClick={handleLetterClick}
                  />
                </motion.div>
              ) : (
                <motion.div
                  key="invitation-container"
                  className="invitation-container"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                >
                  <Invitation />
                </motion.div>
              )}
            </AnimatePresence>

            <AudioPlayer shouldPlay={isLetterOpen} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default App
