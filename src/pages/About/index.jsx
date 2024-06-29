import Banner from '../../components/Banner/Banner'
import Header from '../../components/Header/Header'
import aboutPageImg from '../../assets/images/about-page-img.png'
import Footer from '../../components/Footer/Footer'
import './About.scss'
import Collapse from '../../components/Collapse/Collapse'

function About() {
  const fiabTxt =
    'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes'
  const resTxt =
    'La bienveillance fait partie des valeurs fondatrices de kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'
  const servTxt =
    'La bienveillance fait partie des valeurs fondatrices de kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'
  const secTxt =
    "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."

  return (
    <>
      <Header />
      <main className="about-main">
        <Banner srcImg={aboutPageImg} imgClassName="banner_img" />
        {/* voire avec un map donc un tableau */}
        <div className="collapseBox">
          <Collapse title="Fiabilité" content={fiabTxt} />
          <Collapse title="Respect" content={resTxt} />
          <Collapse title="Service" content={servTxt} />
          <Collapse title="Sécrurité" content={secTxt} />
        </div>
      </main>
      <Footer />
    </>
  )
}

export default About
