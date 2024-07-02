import Banner from '../../components/Banner/Banner'
import Header from '../../components/Header/Header'
import aboutPageImg from '../../assets/images/about-page-img.png'
import Footer from '../../components/Footer/Footer'
import './About.scss'
import Collapse from '../../components/Collapse/Collapse'
import collapseInformation from '../../data/collapse_informations.json'

function About() {
  return (
    <>
      <Header />
      <main className="about-main">
        <Banner srcImg={aboutPageImg} imgClassName="banner_img" />
        <div className="collapseBox">
          {collapseInformation.map((data) => (
            <Collapse key={data.id} title={data.title} content={data.content} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  )
}

export default About
