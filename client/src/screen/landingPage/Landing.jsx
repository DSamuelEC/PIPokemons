import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getTypes } from '../../redux/actions';

export default  function Landing() {
  const dispatch = useDispatch()
  useEffect(()=> {
  dispatch(getTypes());

  },[])

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
      </div>
      <div>
        <p>Parte de abajo final</p>
      </div>
    </div>
  );
}