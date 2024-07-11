import { NavLink } from 'react-router-dom'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import './Error.scss'

function Error() {
  return (
    <div className="error-container">
      <Header />
      <div className="errbox">
        <h1 className="errTitle">404</h1>
        <p className="errTxt">Oups! La page que vous demandez n'existe pas.</p>
        <NavLink to={'/'} className="errLink">
          Retourner sur la page d'acceuil
        </NavLink>
      </div>
      <Footer />
    </div>
  )
}

export default Error
