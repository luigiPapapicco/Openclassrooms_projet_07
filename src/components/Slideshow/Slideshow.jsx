import React, { useState } from 'react'
import styles from './Slideshow.module.scss'
import chevronRight from '../../assets/chevrons/bigArrowRight.svg'
import chevronLeft from '../../assets/chevrons/bigArrowLeft.svg'

function Slideshow({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    )
  }

  return (
    <div className={styles.slideshowContainer}>
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className={styles.imgTst}
      />
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
    </div>
  )
}

export default Slideshow
