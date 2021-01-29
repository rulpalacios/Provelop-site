import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import Event1 from './assets/evento_1.jpg'
import Event2 from './assets/evento_2.jpg'
import Event3 from './assets/evento_3.jpg'
import Event4 from './assets/evento_4.jpg'
import Banner from './assets/banner.png'

const Events = (props) => {
  const history = useHistory();

  useEffect(() => {
    document.body.style.backgroundColor = "#FFFFFF"
  })
  
  const events = [
    {
      name: 'React Native sin fronteras',
      img: Event1
    },
    {
      name: 'Mercadotecnia digital 101',
      img: Event2
    },
    {
      name: 'Levanta fondeo para tu startup',
      img: Event3
    },
    {
      name: 'Metodología SCRUM',
      img: Event4
    }
  ]
  return (
    <div className="container is-fluid">
      <h1 className="my-6">Eventos populares</h1>
      <div class="columns is-mobile is-multiline">
        { events.map((event) => (
          <div 
            class="column event__card is-one-quarter-desktop is-half-mobile is-half-tablet"
            onClick={() =>  history.push(`/courses/1`) }
          >
            <div className="">
              <div className="card-image">
                <figure className="image is-256x128">
                  <img src={event.img} className="event__image"/>
                </figure>
              </div>
              <div className="content">
                <div className="columns mt-1 mb-0 event__info">
                  <div className="column">
                    <i class="fas fa-brain mr-2"></i>
                    Software
                  </div>
                  <div className="column">
                    <i class="fas fa-desktop mr-2"></i>
                    Online en vivo
                  </div>
                </div>
                <h1 className="event__name mt-0">{event.name}</h1>
                <time className="event__dates" datetime="2016-1-1">
                  <i class="fas fa-calendar mr-2"></i>
                  27 de Febrero
                </time>
              </div>
            </div>
          </div>
        ))}

        <div className="column is-full event__banner__container my-6">
          <article class="media mx-6">
            <figure class="media-left">
              <p class="image">
                <img src={Banner} className="event__image__banner" />
              </p>
            </figure>
            <div class="media-content">
              <div class="content">
                <p>
                  <strong>Registrate</strong>
                  <br />
                  Para recomendarte eventos
                </p>
              </div>
            </div>
            <div class="media-right">
              <a className="button is-rounded is-danger mt-3">Comienza ahora</a>
            </div>
          </article>
        </div>

        { events.map((event) => (
          <div 
            class="column event__card is-one-quarter-desktop is-half-mobile is-half-tablet"
            onClick={() =>  history.push(`/courses/1`) }
          >
            <div className="">
              <div className="card-image">
                <figure className="image is-256x128">
                  <img src={event.img} className="event__image"/>
                </figure>
              </div>
              <div className="content">
                <div className="columns mt-1 mb-0 event__info">
                  <div className="column">
                    <i class="fas fa-brain mr-2"></i>
                    Software
                  </div>
                  <div className="column">
                    <i class="fas fa-desktop mr-2"></i>
                    Online en vivo
                  </div>
                </div>
                <h1 className="event__name mt-0">{event.name}</h1>
                <time className="event__dates" datetime="2016-1-1">
                  <i class="fas fa-calendar mr-2"></i>
                  27 de Febrero
                </time>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Events;
