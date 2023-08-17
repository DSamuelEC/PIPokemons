import React from 'react';
import { Link } from 'react-router-dom';

export default  function Landing() {
  return (
    <div>
      <div>
        <p>div contenedor de informacion random</p>
      </div>
      <div>
        <p>div contenedor del boton de Join</p>
        <button>
          <Link to='/home'>lets Go Home!</Link>
        </button>
        <button>
          <Link to='/create'>form!</Link>
        </button>
      </div>
      <div>
        <p>Parte de abajo final</p>
      </div>
    </div>
  );
}