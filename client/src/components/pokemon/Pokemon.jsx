import { Link } from 'react-router-dom';
import "./Pokemon.styles.css";
const Pokemon = ({ id, name, image, types, dueño }) => {
    return (
        <div className='Pk'>
            <Link to={`/detail/${id}`}>
                <h2>{name}</h2>
            </Link>
            <h3> Types: {types.map(type => type.name).join(" - ")}</h3>
            <img src={image} />
            <h3>{dueño}</h3>
        </div>
    )
}

export default Pokemon;