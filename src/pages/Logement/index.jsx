import { useParams } from 'react-router-dom'
import './Logement.scss'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Slideshow from '../../components/Slideshow/Slideshow'
import logementData from '../../data/logements.json'
import Avatar from '../../components/Avatar/Avatar'
import FullName from '../../components/FullName/FullName'
import Rating from '../../components/Rating/Rating'
import TagBar from '../../components/TagBar/TagBar'
import Collapse from '../../components/Collapse/Collapse'

function Logement() {
  const { id } = useParams()
  const logement = logementData.find((logement) => logement.id === id)
  // envisager une direction vers une page d'erreur si l'id n'est pas trouvé
  // console.log(logement.pictures[0])
  // voir l'utilité de use effect

  return (
    <>
      <Header />
      <main className="logement-main">
        <Slideshow images={logement.pictures} />
        <div className="informations-box">
          <div className="log">
            <h2 className="log-name">{logement.title}</h2>
            <p className="log-location">{logement.location}</p>
            <ul className="log-tag">
              {logement.tags.map((tag) => (
                <li key={tag}>
                  <TagBar content={tag} />
                </li>
              ))}
            </ul>
          </div>
          <div className="prop-box">
            <div className="prop-info">
              <FullName fullName={logement.host.name} />
              <Avatar
                path={logement.host.picture}
                txtAlt={`avatar de ${logement.host.name}`}
              />
            </div>
            <Rating rating={parseInt(logement.rating, 10)} />
          </div>
        </div>
        <div className="add-info">
          <Collapse title="Description" content={logement.description} />
          <Collapse
            title="Équipements"
            content={
              <ul className="log-equipement">
                {logement.equipments.map((equipment, index) => (
                  <li key={index}>{equipment}</li>
                ))}
              </ul>
            }
          />
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Logement
