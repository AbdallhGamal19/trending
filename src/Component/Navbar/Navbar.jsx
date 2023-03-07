import React from 'react'
import { Link } from 'react-router-dom'
import styles from './navbar.module.scss'
export default function Navbar({ userData,logout }) {
  return (
    <div className="bbb ">
      <nav className={`navbar navbar-expand-lg fixed-top  py-3 ${styles.navbarBg}`}>
      <div className="container-fluid ">
        <Link className="navbar-brand fw-bold" href="#">Noxe</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {userData &&
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to={``}>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to={`movies`}>Movies</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to={`tv`}>Tv Showes</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to={`people`}>People</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to={`profile`}>profile</Link>
              </li>
            </ul>
          }

          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <ul className='  list-unstyled  d-flex align-items-center'>
              <li className=''><Link to={``}><i className='fab fa-facebook me-2'></i></Link></li>
              <li><Link to={``}><i className='fab fa-linkedin mx-2'></i></Link></li>
              <li><Link to={``}><i className='fab fa-github mx-2'></i></Link></li>
              <li><Link to={``}><i className='fab fa-instagram mx-2'></i></Link></li>
            </ul>
            {userData ?
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" onClick={logout}>Logout</Link>
              </li> 
              :
              <>
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="login ">Login</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="register ">Register</Link>
                </li>
              </>
            }



          </ul>

        </div>
      </div>
    </nav>
    </div>
  )
}
