import React from 'react'

function Events() {
  return (
    <div className="container">
      <h1 className="my-6">Eventos populares</h1>
      <div class="columns is-multiline">
      { Array(18).fill().map(() => (
        <div class="column is-one-fifth">
          <div className="card">
            <div className="card-image">
              <figure class="image is-256x256">
                <img src="https://bulma.io/images/placeholders/256x256.png" />
              </figure>
            </div>
          </div>
        </div>
      )) }
        
      </div>
    </div>
  );
}

export default Events;
