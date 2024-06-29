import styles from './Slideshow.module.scss'
// import chevronRight from '../../assets/bigArrowLeft.svg'
// import chevronLeft from '../../assets/bigArrowRight.svg'

function Slideshow({ srcImg, txtAlt }) {
  return (
    <>
      <div className={styles.slideshowContainer}>
        <img src={srcImg} alt={txtAlt} className={styles.imgTst} />
        {/* <img
          src={chevronLeft}
          alt="symbol pour allez vers la gauche"
          className={styles.chevronLeft}
        />
        <img
          src={chevronRight}
          alt="symbol pour allez vers la droite"
          className={styles.chevronRight}
        /> */}
      </div>
    </>
  )
}

export default Slideshow
