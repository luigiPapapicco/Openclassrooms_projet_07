import styles from './Banner.module.scss'
// import Logo from '../Logo/Logo' // Importez le composant Logo

function Banner({
  srcImg,
  altImg = "image d'illustration",
  title,
  imgClassName,
}) {
  return (
    <div className={styles.banner}>
      <img src={srcImg} alt={altImg} className={styles[imgClassName]} />
      {title && <h1 className={styles.banner_title}>{title}</h1>}
    </div>
  )
}

export default Banner
