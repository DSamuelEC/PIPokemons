import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getTypes } from '../../redux/actions';

export default  function Landing() {
  const dispatch = useDispatch();

  useEffect(()=> {
  dispatch(getTypes());

  },[]);

  return (
    <div>
      <div>
        <p>div contenedor del boton de Join</p>
        <button>
          <Link to='/home'>Lets Go Home!</Link>
        </button>
      </div>
    </div>
  );
};