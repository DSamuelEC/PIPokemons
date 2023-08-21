import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getTypes } from '../../redux/actions';
import './Landing.styles.css'

export default  function Landing() {
  const dispatch = useDispatch();

  useEffect(()=> {
  dispatch(getTypes());

  },[]);

  return (
    <div className='container'>
      
        <h1 className='title'>¡Bienvenido! Ingresa para ver pokemons</h1>
        <button>
          <Link to='/home'>¡Vamos!</Link>
        </button>
      
    </div>
  );
};