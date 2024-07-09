import React, { useState, useEffect } from 'react'
import styles from './Slideshow.module.scss'
import chevronRight from '../../assets/chevrons/bigArrowRight.svg'
import chevronLeft from '../../assets/chevrons/bigArrowLeft.svg'

function Slideshow({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [transitioning, setTransitioning] = useState(false)

  useEffect(() => {
    if (transitioning) {
      const timeout = setTimeout(() => {
        setTransitioning(false)
      }, 500) // Duration of the CSS transition
      return () => clearTimeout(timeout)
    }
  }, [transitioning])

  const handleNext = () => {
    if (!transitioning) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
      setTransitioning(true)
    }
  }

  const handlePrev = () => {
    if (!transitioning) {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      )
      setTransitioning(true)
    }
  }

  return (
    <div className={styles.slideshowContainer}>
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Slide ${index + 1}`}
          className={`${styles.imgTst} ${
            index === currentIndex ? 'active' : ''
          }`}
          style={{ opacity: index === currentIndex ? 1 : 0 }}
        />
      ))}
      {images.length > 1 && (
        <>
          <div className={styles.counter}>
            {currentIndex + 1} / {images.length}
          </div>
          <img
            src={chevronLeft}
            alt="symbol pour aller vers la gauche"
            className={styles.chevronLeft}
            onClick={handlePrev}
          />
          <img
            src={chevronRight}
            alt="symbol pour aller vers la droite"
            className={styles.chevronRight}
            onClick={handleNext}
          />
        </>
      )}
    </div>
  )
}

export default Slideshow
