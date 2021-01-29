import React from 'react'
import LogoImage from './assets/logo.png'
import { Link } from 'react-router-dom'

const Navbar = () => (
<React.Fragment>
  <nav class="navbar is-transparent">
        <div class="navbar-brand">
        <Link class="navbar-item" to="/">
          <img src={LogoImage} alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28" />
        </Link>
          <div class="navbar-burger" data-target="navbarExampleTransparentExample">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div id="navbarExampleTransparentExample" class="navbar-menu">
          <div class="navbar-start">
            <div class="navbar-item has-dropdown is-hoverable">
            </div>
          </div>

          <div class="navbar-end">
            <a class="navbar-item" href="#">
              Descubrir
            </a>
            <a class="navbar-item" href="#">
              Crear un curso
            </a>
            <a class="navbar-item" href="#">
              Ayuda
            </a>
            <a class="navbar-item" href="#">
              Iniciar sesión
            </a>
          </div>
        </div>
      </nav>
</React.Fragment>
)

export default Navbar