import React from 'react'
import HeroImage from './assets/hero-img.jpg'

function Header() {
  return (
    <React.Fragment>
      <section className="hero is-fullheight">
        <div className="hero-body">
          <div className="container is-fluid">
            <div className="level">
              <div className="level-item has-text-left">
                <div>
                  <h1 className="heading has-text-primary is-lowercase"><span>Facilitamos el<br/>desarrollo continuo<br/>profesional<br/></span>a través de expertos<br/>locales.</h1>
                  <a className="button is-rounded is-danger mt-3">Comienza ahora</a>
                </div>
              </div>
              <div className="level-item has-text-centered">
                <div className="section-media">
                  <img src={HeroImage} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Header;
