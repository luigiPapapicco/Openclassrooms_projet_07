import Banner from '../../components/Banner/Banner'
import Header from '../../components/Header/Header'
import './Home.scss'
import homepageimg from '../../assets/images/home-page-img.png'
import Footer from '../../components/Footer/Footer'
import Card from '../../components/Card/Card'
import React, { useState, useEffect } from 'react'
import logementsData from '../../data/logements.json'
import { Link } from 'react-router-dom'

function Home() {
  const [logements, setLogements] = useState([])
  useEffect(() => {
    setLogements(logementsData)
  }, [])

  return (
    <div className="home-container">
      <Header />
      <main className="home-main">
        <Banner
          srcImg={homepageimg}
          title="Chez vous, partout et ailleurs"
          imgClassName="banner_img"
        />
        <div className="logements-container">
          {logements.map((logement) => (
            <Link
              key={logement.id}
              to={`/Logement/${logement.id}`}
              className="linkCard"
            >
              <Card cover={logement.cover} title={logement.title} />
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Home
